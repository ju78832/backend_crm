// src/controllers/authController.js
import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const authController = {
  login: async (req, res) => {
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

      // Generate JWT token
      const token = jwt.sign(
        {
          id: userProfile.id,
          auth_id: userProfile.auth_id,
          role: userProfile.data?.role || "user",
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Update last login time
      await prisma.auth.update({
        where: { id: userProfile.auth_id },
        data: {
          metadata: {
            ...userProfile.auth.metadata,
            lastLogin: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: userProfile.id,
          ...userProfile.data,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  register: async (req, res) => {
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
          metadata: { createdAt: new Date().toISOString(), loginAttempts: 0 },
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
          id: userProfile.id,
          auth_id: auth.id,
          role,
        },
        process.env.JWT_SECRET,
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
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Get current user
  getCurrentUser: async (req, res) => {
    try {
      const userProfile = await prisma.userProfile.findUnique({
        where: { id: req.user.id },
      });

      if (!userProfile) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        id: userProfile.id,
        ...userProfile.data,
        metadata: userProfile.metadata,
      });
    } catch (error) {
      console.error("Get current user error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // forget password
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Find user by email
      const userProfile = await prisma.userProfile.findFirst({
        where: { data: { path: ["email"], equals: email } },
        include: { auth: true },
      });

      if (!userProfile) {
        // Return success even if user not found for security reasons
        return res.status(200).json({
          message:
            "If your email is registered, you will receive a password reset link",
        });
      }

      // Generate reset token
      const resetToken = await bcrypt.genSalt(10);
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

      // Save reset token to auth metadata
      await prisma.auth.update({
        where: { id: userProfile.auth_id },
        data: {
          metadata: {
            ...userProfile.auth.metadata,
            resetToken,
            resetTokenExpiry: resetTokenExpiry.toISOString(),
          },
        },
      });

      // In a real application, send email with reset link here
      // For this example, we'll just return success

      res.status(200).json({
        message:
          "If your email is registered, you will receive a password reset link",
      });
    } catch (error) {
      console.error("Forgot password error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
  // Reset password
  resetPassword: async (req, res) => {
    try {
      const { token, newPassword } = req.body;

      if (!token || !newPassword) {
        return res
          .status(400)
          .json({ message: "Token and new password are required" });
      }

      // Find auth record with matching reset token
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

      // Check if token is expired
      const resetTokenExpiry = new Date(auth.metadata.resetTokenExpiry);
      if (resetTokenExpiry < new Date()) {
        return res.status(400).json({ message: "Reset token has expired" });
      }

      // Generate new salt and hash for the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update auth record
      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          salt,
          current_hash: hashedPassword,
          metadata: {
            ...auth.metadata,
            resetToken: null,
            resetTokenExpiry: null,
            passwordChangedAt: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({ message: "Password has been reset successfully" });
    } catch (error) {
      console.error("Reset password error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // user logout
  logout: async (req, res) => {
    // In a JWT-based authentication system, we don't need to do anything on the server
    // The client should discard the token
    res.status(200).json({ message: "Logged out successfully" });
  },

  // Change password while logged in PUT /api/auth/change-password
  changePassword: async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ message: "Current and new passwords are required" });
      }

      // Get auth record
      const auth = await prisma.auth.findUnique({
        where: { id: req.user.auth_id },
      });

      if (!auth) {
        return res.status(404).json({ message: "User not found" });
      }

      // Verify current password
      const { salt, current_hash } = auth;
      const hashedCurrentPassword = await bcrypt.hash(currentPassword, salt);

      if (hashedCurrentPassword !== current_hash) {
        return res
          .status(401)
          .json({ message: "Current password is incorrect" });
      }

      // Generate new salt and hash for the new password
      const newSalt = await bcrypt.genSalt(10);
      const hashedNewPassword = await bcrypt.hash(newPassword, newSalt);

      // Update auth record
      await prisma.auth.update({
        where: { id: auth.id },
        data: {
          salt: newSalt,
          current_hash: hashedNewPassword,
          metadata: {
            ...auth.metadata,
            passwordChangedAt: new Date().toISOString(),
          },
        },
      });

      res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Change password error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
};

module.exports = authController;
