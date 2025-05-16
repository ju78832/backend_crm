import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../middlewares/auth.js";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Define types for metadata
interface AuthMetadata {
  email: string;
  role: string;
  lastLogin?: string;
  passwordUpdatedAt?: string;
  resetToken?: string;
  resetTokenExpires?: string;
  [key: string]: any;
}

interface UserProfileMetadata {
  registeredAt: string;
  status: string;
  lastUpdated?: string;
  notifications?: {
    email: boolean;
    app: boolean;
  };
  theme?: string;
  language?: string;
  timezone?: string;
  settingsUpdatedAt?: string;
  [key: string]: any;
}

interface UserProfileData {
  name?: string;
  [key: string]: any;
}

interface SafeUserProfile {
  id: number;
  metadata: UserProfileMetadata;
  data: UserProfileData;
  createdAt: Date;
  updatedAt: Date;
  email?: string;
}

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    current_hash: string;
    salt: string;
    metadata: AuthMetadata;
  };
  userProfile?: {
    id: number;
    auth_id: number;
    metadata: UserProfileMetadata;
    data: UserProfileData;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface JWTPayload {
  id: string;
  email?: string;
  purpose?: string;
}

// Helper function to safely cast metadata
function castMetadata<T>(metadata: unknown): T {
  return metadata as T;
}

// Helper function to create metadata object
function createMetadata<T extends object>(data: T): T {
  return data;
}

export const userProfileController = {
  // Get user profile by ID
  getUserProfile: async (req, res) => {
    try {
      // User should be attached from authentication middleware
      const { userProfile } = req;

      if (!userProfile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Don't return sensitive information
      const { auth_id, ...safeUserProfile } = userProfile;

      res.json(safeUserProfile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  },

  // Create new user profile with authentication
  createUserProfile: async (req: Request, res: Response) => {
    try {
      const { email, password, name, ...profileData } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      // Check if user with this email already exists
      const existingUser = await prisma.auth.findFirst({
        where: {
          metadata: {
            path: ["email"],
            equals: email,
          },
        },
      });

      if (existingUser) {
        return res
          .status(409)
          .json({ error: "User with this email already exists" });
      }

      // Hash the password
      const { hash, salt } = hashPassword(password);

      // Create the user auth and profile in a transaction
      const result = await prisma.$transaction(async (prisma) => {
        // Create auth record
        const auth = await prisma.auth.create({
          data: {
            salt,
            current_hash: hash,
            metadata: {
              email,
              role: "user",
              lastLogin: new Date().toISOString(),
            },
          },
        });

        // Create user profile
        const userProfile = await prisma.userProfile.create({
          data: {
            auth_id: auth.id,
            data: {
              name: name || email.split("@")[0],
              ...profileData,
            },
            metadata: {
              registeredAt: new Date().toISOString(),
              status: "active",
            },
          },
        });

        return { auth, userProfile };
      });

      // Generate JWT token
      const payload: JWTPayload = {
        id: result.auth.id.toString(),
        email,
      };

      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "24h" }
      );

      // Remove sensitive information
      const { auth_id, ...safeUserProfile } = result.userProfile;

      res.status(201).json({
        message: "User registered successfully",
        token,
        user: safeUserProfile,
      });
    } catch (error) {
      console.error("Error creating user profile:", error);
      res.status(500).json({ error: "Failed to create user profile" });
    }
  },

  // Update user profile
  updateUserProfile: async (req, res) => {
    try {
      const { user, userProfile } = req;
      const { name, ...profileData } = req.body;

      if (!userProfile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Update the user profile
      const updatedProfile = await prisma.userProfile.update({
        where: { id: userProfile.id },
        data: {
          data: {
            ...userProfile.data,
            name: name || userProfile.data?.name,
            ...profileData,
          },
          metadata: {
            ...userProfile.metadata,
            lastUpdated: new Date().toISOString(),
          },
        },
      });

      // Remove sensitive information
      const { auth_id, ...safeUserProfile } = updatedProfile;

      res.json({
        message: "User profile updated successfully",
        user: safeUserProfile,
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ error: "Failed to update user profile" });
    }
  },

  // User login
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      // Find user by email
      const auth = await prisma.auth.findFirst({
        where: {
          metadata: {
            path: ["email"],
            equals: email,
          },
        },
        include: { userProfile: true },
      });

      if (!auth) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Verify password
      const isPasswordValid = verifyPassword(
        password,
        auth.current_hash,
        auth.salt
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Update last login
      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          metadata: {
            ...castMetadata<AuthMetadata>(auth.metadata),
            lastLogin: new Date().toISOString(),
          },
        },
      });

      // Generate JWT token
      const payload: JWTPayload = {
        id: auth.id.toString(),
        email,
      };

      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "24h" }
      );

      // Remove sensitive information
      const { auth_id, ...safeUserProfile } = auth.userProfile;

      res.json({
        message: "Login successful",
        token,
        user: safeUserProfile,
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Login failed" });
    }
  },

  // Change password
  changePassword: async (req, res) => {
    try {
      const { user } = req;
      const { currentPassword, newPassword } = req.body;

      // Validate required fields
      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ error: "Current password and new password are required" });
      }

      // Verify current password
      const isPasswordValid = verifyPassword(
        currentPassword,
        user.current_hash,
        user.salt
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Current password is incorrect" });
      }

      // Hash the new password
      const { hash, salt } = hashPassword(newPassword);

      // Update password
      await prisma.auth.update({
        where: { id: user.id },
        data: {
          current_hash: hash,
          salt,
          metadata: {
            ...castMetadata<AuthMetadata>(user.metadata),
            passwordUpdatedAt: new Date().toISOString(),
          },
        },
      });

      res.json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ error: "Failed to change password" });
    }
  },

  // Delete user account
  deleteAccount: async (req, res) => {
    try {
      const { user, userProfile } = req;

      if (!user || !userProfile) {
        return res.status(404).json({ error: "User not found" });
      }

      // Delete user profile and auth in a transaction
      await prisma.$transaction([
        prisma.userProfile.delete({
          where: { id: userProfile.id },
        }),
        prisma.auth.delete({
          where: { id: user.id },
        }),
      ]);

      res.json({ message: "Account deleted successfully" });
    } catch (error) {
      console.error("Error deleting account:", error);
      res.status(500).json({ error: "Failed to delete account" });
    }
  },

  // Request password reset
  requestPasswordReset: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      // Find user by email
      const auth = await prisma.auth.findFirst({
        where: {
          metadata: {
            path: ["email"],
            equals: email,
          },
        },
      });

      if (!auth) {
        // Don't reveal if the email exists or not for security reasons
        return res.json({
          message: "If your email is registered, you will receive a reset link",
        });
      }

      // Generate reset token (valid for 1 hour)
      const payload: JWTPayload = {
        id: auth.id.toString(),
        purpose: "reset",
      };

      const resetToken = jwt.sign(
        payload,
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1h" }
      );

      // Store reset token with expiration
      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          metadata: {
            ...castMetadata<AuthMetadata>(auth.metadata),
            resetToken,
            resetTokenExpires: new Date(Date.now() + 3600000).toISOString(), // 1 hour
          },
        },
      });

      // In a real application, send an email with the reset link
      // For this example, we'll just return the token
      // Note: In production, never return the token directly

      res.json({
        message: "If your email is registered, you will receive a reset link",
        // Remove this in production:
        resetToken,
      });
    } catch (error) {
      console.error("Error requesting password reset:", error);
      res.status(500).json({ error: "Failed to request password reset" });
    }
  },

  // Reset password using token
  resetPassword: async (req, res) => {
    try {
      const { token, newPassword } = req.body;

      if (!token || !newPassword) {
        return res
          .status(400)
          .json({ error: "Token and new password are required" });
      }

      // Verify token
      let decoded;
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      // Check if token is for password reset
      if (decoded.purpose !== "reset") {
        return res.status(401).json({ error: "Invalid token purpose" });
      }

      // Find user by ID
      const auth = await prisma.auth.findUnique({
        where: { id: decoded.id },
      });

      if (!auth) {
        return res.status(404).json({ error: "User not found" });
      }

      // Check if token matches stored token and is not expired
      const authMetadata = castMetadata<AuthMetadata>(auth.metadata);
      if (
        !authMetadata.resetToken ||
        authMetadata.resetToken !== token ||
        new Date(authMetadata.resetTokenExpires || "") < new Date()
      ) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      // Hash the new password
      const { hash, salt } = hashPassword(newPassword);

      // Update password and clear reset token
      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          current_hash: hash,
          salt,
          metadata: {
            ...castMetadata<AuthMetadata>(auth.metadata),
            resetToken: null,
            resetTokenExpires: null,
            passwordUpdatedAt: new Date().toISOString(),
          },
        },
      });

      res.json({ message: "Password reset successful" });
    } catch (error) {
      console.error("Error resetting password:", error);
      res.status(500).json({ error: "Failed to reset password" });
    }
  },

  // Get user profile settings
  getProfileSettings: async (req, res) => {
    try {
      const { userProfile } = req;

      if (!userProfile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Extract only settings that should be user-configurable
      const settings = {
        notifications: userProfile.metadata?.notifications || {
          email: true,
          app: true,
        },
        theme: userProfile.metadata?.theme || "light",
        language: userProfile.metadata?.language || "en",
        timezone: userProfile.metadata?.timezone || "UTC",
      };

      res.json(settings);
    } catch (error) {
      console.error("Error fetching profile settings:", error);
      res.status(500).json({ error: "Failed to fetch profile settings" });
    }
  },

  // Update user profile settings
  updateProfileSettings: async (req, res) => {
    try {
      const { userProfile } = req;
      const { notifications, theme, language, timezone } = req.body;

      if (!userProfile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Update only allowed settings
      const updatedMetadata = {
        ...userProfile.metadata,
        notifications: notifications || userProfile.metadata?.notifications,
        theme: theme || userProfile.metadata?.theme,
        language: language || userProfile.metadata?.language,
        timezone: timezone || userProfile.metadata?.timezone,
        settingsUpdatedAt: new Date().toISOString(),
      };

      // Update user profile
      await prisma.userProfile.update({
        where: { id: userProfile.id },
        data: {
          metadata: updatedMetadata,
        },
      });

      res.json({
        message: "Profile settings updated successfully",
        settings: {
          notifications: updatedMetadata.notifications,
          theme: updatedMetadata.theme,
          language: updatedMetadata.language,
          timezone: updatedMetadata.timezone,
        },
      });
    } catch (error) {
      console.error("Error updating profile settings:", error);
      res.status(500).json({ error: "Failed to update profile settings" });
    }
  },

  // Admin: Get all user profiles with pagination
  getAllUserProfiles: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const profiles = await prisma.userProfile.findMany({
        skip,
        take: limit,
        include: {
          auth: {
            select: {
              metadata: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.userProfile.count();

      // Remove sensitive information and add email
      const safeProfiles = profiles.map((profile) => {
        const { auth_id, auth, ...rest } = profile;
        const authMetadata = castMetadata<AuthMetadata>(auth?.metadata);
        const safeProfile = rest as SafeUserProfile;
        safeProfile.email = authMetadata?.email;
        return safeProfile;
      });

      res.json({
        data: safeProfiles,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching all user profiles:", error);
      res.status(500).json({ error: "Failed to fetch user profiles" });
    }
  },

  // Admin: Get user profile by ID
  getUserProfileById: async (req, res) => {
    try {
      const { id } = req.params;

      const profile = await prisma.userProfile.findUnique({
        where: { id: parseInt(id) },
        include: {
          auth: {
            select: {
              metadata: true,
            },
          },
        },
      });

      if (!profile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Remove sensitive information and add email
      const { auth_id, auth, ...rest } = profile;
      const authMetadata = castMetadata<AuthMetadata>(auth?.metadata);
      const safeProfile = rest as SafeUserProfile;
      safeProfile.email = authMetadata?.email;

      res.json(safeProfile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  },

  // Admin: Create user profile
  adminCreateUserProfile: async (req, res) => {
    try {
      const { email, password, role = "user", ...profileData } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      // Check if user with this email already exists
      const existingUser = await prisma.auth.findFirst({
        where: {
          metadata: {
            path: ["email"],
            equals: email,
          },
        },
      });

      if (existingUser) {
        return res
          .status(409)
          .json({ error: "User with this email already exists" });
      }

      // Hash the password
      const { hash, salt } = hashPassword(password);

      // Create the user auth and profile in a transaction
      const result = await prisma.$transaction(async (prisma) => {
        // Create auth record with metadata
        const authMetadata: AuthMetadata = {
          email,
          role,
          lastLogin: new Date().toISOString(),
        };

        const auth = await prisma.auth.create({
          data: {
            salt,
            current_hash: hash,
            metadata: authMetadata,
          },
        });

        // Create user profile with metadata
        const profileMetadata: UserProfileMetadata = {
          registeredAt: new Date().toISOString(),
          status: "active",
        };

        const userProfile = await prisma.userProfile.create({
          data: {
            auth_id: auth.id,
            data: profileData,
            metadata: profileMetadata,
          },
        });

        return { auth, userProfile };
      });

      // Remove sensitive information
      const { auth_id, ...safeUserProfile } = result.userProfile;

      res.status(201).json({
        message: "User profile created successfully",
        user: safeUserProfile,
      });
    } catch (error) {
      console.error("Error creating user profile:", error);
      res.status(500).json({ error: "Failed to create user profile" });
    }
  },

  // Admin: Update user profile
  adminUpdateUserProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const { role, ...profileData } = req.body;

      // Check if profile exists
      const existingProfile = await prisma.userProfile.findUnique({
        where: { id: parseInt(id) },
        include: {
          auth: true,
        },
      });

      if (!existingProfile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Update profile and auth in a transaction
      const result = await prisma.$transaction(async (prisma) => {
        // Update auth role if provided
        if (role) {
          const authMetadata = castMetadata<AuthMetadata>(
            existingProfile.auth.metadata
          );
          const updatedAuthMetadata: AuthMetadata = {
            ...authMetadata,
            role,
          };

          await prisma.auth.update({
            where: { id: existingProfile.auth_id },
            data: {
              metadata: updatedAuthMetadata,
            },
          });
        }

        // Update user profile
        const profileMetadata = castMetadata<UserProfileMetadata>(
          existingProfile.metadata
        );
        const existingData = castMetadata<UserProfileData>(
          existingProfile.data
        );

        const updatedProfileMetadata: UserProfileMetadata = {
          ...profileMetadata,
          lastUpdated: new Date().toISOString(),
        };

        const updatedProfileData: UserProfileData = {
          ...existingData,
          ...profileData,
        };

        const updatedProfile = await prisma.userProfile.update({
          where: { id: parseInt(id) },
          data: {
            data: updatedProfileData,
            metadata: updatedProfileMetadata,
          },
        });

        return updatedProfile;
      });

      // Remove sensitive information
      const { auth_id, ...safeUserProfile } = result;

      res.json({
        message: "User profile updated successfully",
        user: safeUserProfile,
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ error: "Failed to update user profile" });
    }
  },

  // Admin: Delete user profile
  deleteUserProfile: async (req, res) => {
    try {
      const { id } = req.params;

      // Check if profile exists
      const profile = await prisma.userProfile.findUnique({
        where: { id: parseInt(id) },
        include: {
          auth: true,
        },
      });

      if (!profile) {
        return res.status(404).json({ error: "User profile not found" });
      }

      // Delete profile and auth in a transaction
      await prisma.$transaction([
        prisma.userProfile.delete({
          where: { id: parseInt(id) },
        }),
        prisma.auth.delete({
          where: { id: profile.auth_id },
        }),
      ]);

      res.json({ message: "User profile deleted successfully" });
    } catch (error) {
      console.error("Error deleting user profile:", error);
      res.status(500).json({ error: "Failed to delete user profile" });
    }
  },
};
