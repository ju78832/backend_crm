// src/routes/employeeRoutes.js
import express from "express";
import { authenticateToken, authorizeAdmin } from "../middlewares/auth";
import employeeController from "../controllers/employeeController";
const router = express.Router();

// All employee routes require authentication
router.use(authenticateToken);

// General employee routes
router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);

// Admin only routes
router.post("/", authorizeAdmin, employeeController.createEmployee);
router.put("/:id", authorizeAdmin, employeeController.updateEmployee);
router.delete("/:id", authorizeAdmin, employeeController.deleteEmployee);

// Additional routes
router.get("/:id/claims", employeeController.getEmployeeClaims);
router.get("/:id/performance", employeeController.getEmployeePerformance);

module.exports = router;
