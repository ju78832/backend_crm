import { PrismaClient } from "../generated/prisma/client.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const prisma = new PrismaClient();

// Authentication middleware
export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the auth id
    const auth = await prisma.auth.findUnique({
      where: { id: decoded.id },
      include: { userProfile: true },
    });

    if (!auth) {
      return res.status(401).json({ error: "User not found" });
    }

    // Attach user data to the request
    req.user = auth;
    req.userProfile = auth.userProfile;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Role-based authorization middleware
export const authorize = (roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.metadata || !req.user.metadata.role) {
        return res
          .status(403)
          .json({ error: "Forbidden: Missing role information" });
      }

      const userRole = req.user.metadata.role;

      if (Array.isArray(roles) && !roles.includes(userRole)) {
        return res
          .status(403)
          .json({ error: "Forbidden: Insufficient permissions" });
      }

      if (typeof roles === "string" && roles !== userRole) {
        return res
          .status(403)
          .json({ error: "Forbidden: Insufficient permissions" });
      }

      next();
    } catch (error) {
      return res.status(500).json({ error: "Authorization error" });
    }
  };
};

// Hash password utility
export const hashPassword = (
  password,
  salt = crypto.randomBytes(16).toString("hex")
) => {
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return { hash, salt };
};

// Verify password utility
export const verifyPassword = (password, hash, salt) => {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
};

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Invalid token" });
  }

  res.status(500).json({ error: "Something went wrong" });
};

// Logging middleware
export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} [${res.statusCode}] ${duration}ms`
    );
  });

  next();
};

// CORS middleware
export const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
};

// Rate limiting middleware
export const rateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  const requests = new Map();

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    // Clean old entries
    if (requests.has(ip)) {
      const userRequests = requests
        .get(ip)
        .filter((time) => time > now - windowMs);
      requests.set(ip, userRequests);

      if (userRequests.length >= max) {
        return res.status(429).json({
          error: "Too many requests, please try again later.",
        });
      }

      userRequests.push(now);
    } else {
      requests.set(ip, [now]);
    }

    next();
  };
};
