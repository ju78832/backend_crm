import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
import { policyController } from "../controllers/policy.js";

const router = express.Router();

// All policy type routes require authentication
router.use(authenticate);

// Public routes for authenticated users
router.get("/", policyController.getAllPolicies);
router.get("/:id", policyController.getPolicyById);

// Admin only routes
router.post("/", authorize("admin"), policyController.createPolicy);
router.put("/:id", authorize("admin"), policyController.updatePolicy);
router.delete("/:id", authorize("admin"), policyController.deletePolicy);

// Additional routes
router.get("/:id/claims", policyController.getPolicyAnalytics);
router.get("/:id/stats", policyController.getPolicyAnalytics);

export default router;
