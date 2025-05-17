import express, { Router, RequestHandler } from "express";
import * as employeeController from "../controllers/employeeController.js";
import { authenticate, authorize } from "../middlewares/auth.js";

const router: Router = express.Router();

router.use(authenticate);

// General employee routes
router.get(
  "/",
  employeeController.getAllEmployees as unknown as RequestHandler
);
router.get(
  "/:id",
  employeeController.getEmployeeById as unknown as RequestHandler
);

// Admin only routes
router.post(
  "/",
  authorize(["admin"]),
  employeeController.createEmployee as unknown as RequestHandler
);
router.put(
  "/:id",
  authorize(["admin"]),
  employeeController.updateEmployee as unknown as RequestHandler
);
router.delete(
  "/:id",
  authorize(["admin"]),
  employeeController.deleteEmployee as unknown as RequestHandler
);

// Additional routes
router.get(
  "/:id/claims",
  employeeController.getEmployeeClaims as unknown as RequestHandler
);
router.get(
  "/:id/performance",
  employeeController.getEmployeePerformance as unknown as RequestHandler
);

export default router;
