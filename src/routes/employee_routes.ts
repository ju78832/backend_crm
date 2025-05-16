const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { authenticateToken, authorizeAdmin } = require("../middlewares/auth");

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
