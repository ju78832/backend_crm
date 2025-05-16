import express, { Request, Response } from "express";
import { userProfileController } from "../controllers/userProfile.js";
import { authenticate, authorize } from "../middlewares/auth.js";

// Define the authenticated request type
interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    current_hash: string;
    salt: string;
    metadata: {
      email: string;
      role: string;
      [key: string]: any;
    };
  };
  userProfile?: {
    id: number;
    auth_id: number;
    metadata: {
      [key: string]: any;
    };
    data: {
      [key: string]: any;
    };
    createdAt: Date;
    updatedAt: Date;
  };
}

const router = express.Router();

// All user profile routes require authentication
router.use(authenticate);

// User can access their own profile
router.get(
  "/me",
  userProfileController.getUserProfile as unknown as express.RequestHandler
);
router.put(
  "/me",
  userProfileController.updateUserProfile as unknown as express.RequestHandler
);
router.get(
  "/me/settings",
  userProfileController.getProfileSettings as unknown as express.RequestHandler
);
router.put(
  "/me/settings",
  userProfileController.updateProfileSettings as unknown as express.RequestHandler
);

// Password management
router.post(
  "/me/change-password",
  userProfileController.changePassword as unknown as express.RequestHandler
);
router.post(
  "/me/request-reset",
  userProfileController.requestPasswordReset as unknown as express.RequestHandler
);
router.post(
  "/me/reset-password",
  userProfileController.resetPassword as unknown as express.RequestHandler
);

// Account management
router.delete(
  "/me",
  userProfileController.deleteAccount as unknown as express.RequestHandler
);

// Admin routes
router.get(
  "/",
  authorize("admin"),
  userProfileController.getAllUserProfiles as unknown as express.RequestHandler
);
router.get(
  "/:id",
  authorize("admin"),
  userProfileController.getUserProfileById as unknown as express.RequestHandler
);
router.post(
  "/",
  authorize("admin"),
  userProfileController.adminCreateUserProfile as unknown as express.RequestHandler
);
router.put(
  "/:id",
  authorize("admin"),
  userProfileController.adminUpdateUserProfile as unknown as express.RequestHandler
);
router.delete(
  "/:id",
  authorize("admin"),
  userProfileController.deleteUserProfile as unknown as express.RequestHandler
);

export default router;
