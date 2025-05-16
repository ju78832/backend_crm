import express from "express";
import userProfileController from "../controllers/userProfileController";
import { authenticateToken, authorizeAdmin } from "../middlewares/auth";

const router = express.Router();

// All user profile routes require authentication
router.use(authenticateToken);

// User can access their own profile
router.get("/me", userProfileController.getMyProfile);
router.put("/me", userProfileController.updateMyProfile);

// Admin only routes
router.get("/", authorizeAdmin, userProfileController.getAllProfiles);
router.get("/:id", authorizeAdmin, userProfileController.getProfileById);
router.post("/", authorizeAdmin, userProfileController.createProfile);
router.put("/:id", authorizeAdmin, userProfileController.updateProfile);
router.delete("/:id", authorizeAdmin, userProfileController.deleteProfile);

module.exports = router;
