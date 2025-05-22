import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
import { policyController } from "../controllers/policy.js";

const router = express.Router();

// All policy type routes require authentication
router.use(authenticate);

// Public routes for authenticated users (read operations)
router.get("/", policyController.getAllPolicies);
router.get("/search", policyController.searchPolicies);
router.get("/:id", policyController.getPolicyById);

// Hierarchical structure routes (read operations)
router.get("/:id/structure", policyController.getPolicyStructure);
router.get("/:id/node", policyController.getPolicyNodeByPath);
router.get("/:id/leaf-nodes", policyController.getPolicyLeafNodes);

// Analytics and reporting routes
router.get("/:id/analytics", policyController.getPolicyAnalytics);
router.get(
  "/:id/claims/date-range",
  policyController.getPolicyClaimsByDateRange
);

// Admin only routes (write operations)
router.post("/", authorize("admin"), policyController.createPolicy);
router.post(
  "/bulk-create",
  authorize("admin"),
  policyController.bulkCreatePolicies
);
router.post(
  "/initialize-defaults",
  authorize("admin"),
  policyController.initializeDefaultPolicies
);
router.post(
  "/:id/add-node",
  authorize("admin"),
  policyController.addPolicyNode
);

router.put("/:id", authorize("admin"), policyController.updatePolicy);
router.delete("/:id", authorize("admin"), policyController.deletePolicy);

// Legacy routes (for backward compatibility)
router.get("/:id/claims", policyController.getPolicyAnalytics);
router.get("/:id/stats", policyController.getPolicyAnalytics);

export default router;
