import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { claimController } from "../controllers/claim.js";

const router = express.Router();

// All claim routes require authentication
router.use(authenticate);

// Claim routes
router.get("/", claimController.getAllClaims);
router.get("/:id", claimController.getClaimById);
router.post("/", claimController.createClaim);
router.put("/:id", claimController.updateClaim);
router.delete("/:id", claimController.deleteClaim);

// Additional routes
router.get("/dashboard/stats", claimController.getClaimStats);
router.get("/status/:status", claimController.getClaimsByStatus);
router.post("/:id/documents", claimController.uploadClaimDocuments);
router.get("/:id/documents", claimController.getClaimDocuments);
router.put("/:id/status", claimController.updateClaimStatus);

export default router;
