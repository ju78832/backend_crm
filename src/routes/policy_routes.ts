import express from "express";
import { authtokenicateToken, authorizeAdmin } from "../middlewares/auth";
import policyTypeController from "../controllers/policyTypeController";

const router = express.Router();

// All policy type routes require authentication
router.use(authenticateToken);

// Public routes for authenticated users
router.get("/", policyTypeController.getAllPolicyTypes);
router.get("/:id", policyTypeController.getPolicyTypeById);

// Admin only routes
router.post("/", authorizeAdmin, policyTypeController.createPolicyType);
router.put("/:id", authorizeAdmin, policyTypeController.updatePolicyType);
router.delete("/:id", authorizeAdmin, policyTypeController.deletePolicyType);

// Additional routes
router.get("/:id/claims", policyTypeController.getPolicyTypeClaims);
router.get("/:id/stats", policyTypeController.getPolicyTypeStats);

module.exports = router;
