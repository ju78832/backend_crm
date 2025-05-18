// src/routes/authRoutes.js
import express, { RequestHandler } from "express";
import { authenticate } from "../middlewares/auth.js";
import authController from "../controllers/auth.js";
const router = express.Router();

// Public routes
router.post("/login", authController.login as unknown as RequestHandler);
router.post("/register", authController.register as unknown as RequestHandler);
router.post(
  "/forgot-password",
  authController.forgotPassword as unknown as RequestHandler
);
router.post(
  "/reset-password",
  authController.resetPassword as unknown as RequestHandler
);

// Protected routes
router.get(
  "/me",
  authenticate as unknown as RequestHandler,
  authController.getCurrentUser as unknown as RequestHandler
);
router.post(
  "/logout",
  authenticate as unknown as RequestHandler,
  authController.logout as unknown as RequestHandler
);
router.put(
  "/change-password",
  authenticate as unknown as RequestHandler,
  authController.changePassword as unknown as RequestHandler
);

export default router;
