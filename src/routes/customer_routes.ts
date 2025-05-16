import express, { Request, Response, RequestHandler } from "express";
import customerController from "../controllers/customer.js";
import { authenticate } from "../middlewares/auth.js";

interface CustomerQuery {
  page?: string | number;
  limit?: string | number;
  sortBy?: string;
  order?: string;
  city?: string;
  email?: string;
  query?: string;
  status?: string;
}

interface CustomerParams {
  id: string;
}

const router = express.Router();

// All customer routes require authentication
router.use(authenticate);

// Customer routes
router.get(
  "/",
  customerController.getAllCustomers as unknown as RequestHandler
);
router.get(
  "/:id",
  customerController.getCustomerById as unknown as RequestHandler
);
router.post(
  "/",
  customerController.createCustomer as unknown as RequestHandler
);
router.put(
  "/:id",
  customerController.updateCustomer as unknown as RequestHandler
);
router.delete(
  "/:id",
  customerController.deleteCustomer as unknown as RequestHandler
);

// Additional routes
router.get(
  "/:id/claims",
  customerController.getCustomerClaims as unknown as RequestHandler
);
router.get(
  "/search",
  customerController.searchCustomers as unknown as RequestHandler
);

export default router;
