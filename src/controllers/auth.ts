// src/controllers/authController.js
import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  role?: string;
  [key: string]: any;
}

interface AuthMetadata {
  createdAt?: string;
  lastLogin?: string;
  loginAttempts: number;
  resetToken?: string;
  resetTokenExpiry?: string;
  passwordChangedAt?: string;
  [key: string]: any;
}

interface CustomRequest extends Request {
  user?: {
    id: number;
    auth_id: string;
    role?: string;
  };
}

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const userProfile = await prisma.userProfile.findFirst({
        where: { data: { path: ["email"], equals: email } },
        include: { auth: true },
      });

      if (!userProfile || !userProfile.auth) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const { salt, current_hash } = userProfile.auth;
      const hashedPassword = await bcrypt.hash(password, salt);

      if (hashedPassword !== current_hash) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const userData = userProfile.data as UserData;
      const authMetadata = userProfile.auth.metadata as AuthMetadata;

      // Generate JWT token
      const token = jwt.sign(
        {
          id: Number(userProfile.id),
          auth_id: Number(userProfile.auth_id),
          role: userData.role || "user",
        },
        process.env.JWT_SECRET || "fallback_secret",
        { expiresIn: "24h" }
      );

      // Update last login time
      await prisma.auth.update({
        where: { id: userProfile.auth_id },
        data: {
          metadata: {
            ...authMetadata,
            lastLogin: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: userProfile.id,
          ...userData,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },

  register: async (req: Request, res: Response) => {
    try {
      const { email, password, firstName, lastName, role = "user" } = req.body;

      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if user already exists
      const existingUser = await prisma.userProfile.findFirst({
        where: { data: { path: ["email"], equals: email } },
      });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Generate salt and hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create auth record
      const auth = await prisma.auth.create({
        data: {
          salt,
          current_hash: hashedPassword,
          metadata: {
            createdAt: new Date().toISOString(),
            loginAttempts: 0,
            resetToken: null,
            resetTokenExpiry: null,
            passwordChangedAt: null,
          } as AuthMetadata,
        },
      });

      // Create user profile
      const userProfile = await prisma.userProfile.create({
        data: {
          auth_id: auth.id,
          data: { firstName, lastName, email, role },
          metadata: { activated: true, createdAt: new Date().toISOString() },
        },
      });

      // Generate JWT token
      const token = jwt.sign(
        {
          id: Number(userProfile.id),
          auth_id: Number(auth.id),
          role,
        },
        process.env.JWT_SECRET || "fallback_secret",
        { expiresIn: "24h" }
      );

      res.status(201).json({
        message: "Registration successful",
        token,
        user: {
          id: userProfile.id,
          firstName,
          lastName,
          email,
          role,
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },

  getCurrentUser: async (req: CustomRequest, res: Response) => {
    try {
      const userProfile = await prisma.userProfile.findUnique({
        where: { id: req.user?.id },
      });

      if (!userProfile) {
        return res.status(404).json({ message: "User not found" });
      }

      const userData = userProfile.data as UserData;

      res.status(200).json({
        id: userProfile.id,
        ...userData,
        metadata: userProfile.metadata,
      });
    } catch (error) {
      console.error("Get current user error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },

  forgotPassword: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const userProfile = await prisma.userProfile.findFirst({
        where: { data: { path: ["email"], equals: email } },
        include: { auth: true },
      });

      if (!userProfile) {
        return res.status(200).json({
          message:
            "If your email is registered, you will receive a password reset link",
        });
      }

      const resetToken = await bcrypt.genSalt(10);
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour
      const authMetadata = userProfile.auth.metadata as AuthMetadata;

      await prisma.auth.update({
        where: { id: userProfile.auth_id },
        data: {
          metadata: {
            ...authMetadata,
            resetToken,
            resetTokenExpiry: resetTokenExpiry.toISOString(),
          },
        },
      });

      res.status(200).json({
        message:
          "If your email is registered, you will receive a password reset link",
      });
    } catch (error) {
      console.error("Forgot password error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;

      if (!token || !newPassword) {
        return res
          .status(400)
          .json({ message: "Token and new password are required" });
      }

      const auth = await prisma.auth.findFirst({
        where: {
          metadata: {
            path: ["resetToken"],
            equals: token,
          },
        },
      });

      if (!auth) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }

      const authMetadata = auth.metadata as AuthMetadata;
      const resetTokenExpiry = new Date(authMetadata.resetTokenExpiry || "");

      if (resetTokenExpiry < new Date()) {
        return res.status(400).json({ message: "Reset token has expired" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          salt,
          current_hash: hashedPassword,
          metadata: {
            ...authMetadata,
            resetToken: null,
            resetTokenExpiry: null,
            passwordChangedAt: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({ message: "Password has been reset successfully" });
    } catch (error) {
      console.error("Reset password error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },

  logout: async (req: Request, res: Response) => {
    res.status(200).json({ message: "Logged out successfully" });
  },

  changePassword: async (req: CustomRequest, res: Response) => {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ message: "Current and new passwords are required" });
      }

      const auth = await prisma.auth.findUnique({
        where: { id: req.user?.auth_id },
      });

      if (!auth) {
        return res.status(404).json({ message: "User not found" });
      }

      const { salt, current_hash } = auth;
      const hashedCurrentPassword = await bcrypt.hash(currentPassword, salt);

      if (hashedCurrentPassword !== current_hash) {
        return res
          .status(401)
          .json({ message: "Current password is incorrect" });
      }

      const newSalt = await bcrypt.genSalt(10);
      const hashedNewPassword = await bcrypt.hash(newPassword, newSalt);
      const authMetadata = auth.metadata as AuthMetadata;

      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          salt: newSalt,
          current_hash: hashedNewPassword,
          metadata: {
            ...authMetadata,
            passwordChangedAt: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Change password error:", error);
      res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message,
      });
    }
  },
};

export default authController;
