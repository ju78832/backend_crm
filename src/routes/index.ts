// src/routes/index.ts
import express, { Router } from "express";
import profileRoutes from "../routes/profile_routes.js";
import policyRoutes from "../routes/policy_routes.js";
import customerRoutes from "../routes/customer_routes.js";
import employeeRoutes from "../routes/employee_routes.js";
import claimRoutes from "../routes/claim_routes.js";

const router: Router = express.Router();

// Mount routes
router.use("/user-profiles", profileRoutes);
router.use("/policy-types", policyRoutes);
router.use("/customers", customerRoutes);
router.use("/employees", employeeRoutes);
router.use("/claims", claimRoutes);

export default router;
