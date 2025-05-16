import express from "express";
import customerController from "../controllers/customerController";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router();

// All customer routes require authentication
router.use(authenticateToken);

// Customer routes
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

// Additional routes
router.get("/:id/claims", customerController.getCustomerClaims);
router.get("/search", customerController.searchCustomers);

module.exports = router;
