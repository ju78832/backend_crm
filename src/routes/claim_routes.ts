import express from "express";
import { authenticateToken } from "../middlewares/auth";
import claimController from "../controllers/claimController";

const router = express.Router();

// All claim routes require authentication
router.use(authenticateToken);

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

module.exports = router;
