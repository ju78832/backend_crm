// src/controllers/customerController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const customerController = {
  // Get all customers with pagination
  getAllCustomers: async (req, res) => {
    try {
      const {
        page = 1,
        limit = 10,
        sortBy = "createdAt",
        order = "desc",
      } = req.query;
      const skip = (page - 1) * limit;

      // Parse filters
      const filters = {};
      if (req.query.city) filters.city = req.query.city;
      if (req.query.email) filters.email = { contains: req.query.email };

      // Get total count for pagination
      const totalCount = await prisma.customer.count({ where: filters });

      // Get customers
      const customers = await prisma.customer.findMany({
        where: filters,
        skip: parseInt(skip),
        take: parseInt(limit),
        orderBy: { [sortBy]: order },
        include: {
          _count: {
            select: { claims: true },
          },
        },
      });

      const formattedCustomers = customers.map((customer) => ({
        ...customer,
        claimsCount: customer._count.claims,
      }));

      res.status(200).json({
        customers: formattedCustomers,
        pagination: {
          total: totalCount,
          page: parseInt(page),
          limit: parseInt(limit),
          pages: Math.ceil(totalCount / limit),
        },
      });
    } catch (error) {
      console.error("Get customers error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Get customer by ID Get api/customers/:id
  getCustomerById: async (req, res) => {
    try {
      const { id } = req.params;

      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(id) },
        include: {
          _count: {
            select: { claims: true },
          },
        },
      });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      const formattedCustomer = {
        ...customer,
        claimsCount: customer._count.claims,
      };

      res.status(200).json(formattedCustomer);
    } catch (error) {
      console.error("Get customer error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Create new customer POST api/customers
  createCustomer: async (req, res) => {
    try {
      const { name, city, number, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
      }

      // Check if email is already in use
      const existingCustomer = await prisma.customer.findFirst({
        where: { email },
      });

      if (existingCustomer) {
        return res.status(409).json({ message: "Email already in use" });
      }

      const newCustomer = await prisma.customer.create({
        data: {
          name,
          city,
          number,
          email,
        },
      });

      res.status(201).json({
        message: "Customer created successfully",
        customer: newCustomer,
      });
    } catch (error) {
      console.error("Create customer error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Update customer by ID PUT api/customers/:id
  updateCustomer: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, city, number, email } = req.body;

      // Check if customer exists
      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(id) },
      });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      // If email is being changed, check if the new email is already in use
      if (email && email !== customer.email) {
        const existingCustomer = await prisma.customer.findFirst({
          where: { email },
        });

        if (existingCustomer) {
          return res.status(409).json({ message: "Email already in use" });
        }
      }

      const updatedCustomer = await prisma.customer.update({
        where: { id: parseInt(id) },
        data: {
          name: name || customer.name,
          city: city !== undefined ? city : customer.city,
          number: number !== undefined ? number : customer.number,
          email: email || customer.email,
        },
      });

      res.status(200).json({
        message: "Customer updated successfully",
        customer: updatedCustomer,
      });
    } catch (error) {
      console.error("Update customer error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Delete customer by ID DELETE api/customers/:id
  deleteCustomer: async (req, res) => {
    try {
      const { id } = req.params;

      // Check if customer exists
      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(id) },
        include: {
          _count: {
            select: { claims: true },
          },
        },
      });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      // Check if customer has claims
      if (customer._count.claims > 0) {
        return res.status(409).json({
          message:
            "Cannot delete customer with existing claims. Please delete or transfer the claims first.",
        });
      }

      await prisma.customer.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
      console.error("Delete customer error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  /**
   * Get customer claims
   * @route GET /api/customers/:id/claims
   */
  getCustomerClaims: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.query;

      // Check if customer exists
      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(id) },
      });

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      // Prepare filter
      const filter = { customer_id: parseInt(id) };
      if (status) {
        filter.metadata = {
          path: ["status"],
          equals: status,
        };
      }

      // Get customer claims
      const claims = await prisma.claim.findMany({
        where: filter,
        include: {
          employee: {
            select: {
              id: true,
              name: true,
              position: true,
            },
          },
          policyType: {
            select: {
              id: true,
              data: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      // Format the claims
      const formattedClaims = claims.map((claim) => ({
        id: claim.id,
        details: claim.details,
        status: claim.metadata?.status,
        claimAmount: claim.metadata?.claimAmount,
        incidentDate: claim.metadata?.incidentDate,
        createdAt: claim.createdAt,
        updatedAt: claim.updatedAt,
        employee: claim.employee,
        policyType: {
          id: claim.policyType.id,
          name: claim.policyType.data?.name,
          description: claim.policyType.data?.description,
        },
      }));

      res.status(200).json({ claims: formattedClaims });
    } catch (error) {
      console.error("Get customer claims error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },

  // Search customers by name, email, or city
  // GET api/customers/search?query=searchTerm&page=1&limit=10
  searchCustomers: async (req, res) => {
    try {
      const { query, page = 1, limit = 10 } = req.query;

      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }

      const skip = (page - 1) * limit;

      // Search customers by name or email
      const customers = await prisma.customer.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
            { city: { contains: query, mode: "insensitive" } },
            { number: { contains: query } },
          ],
        },
        skip: parseInt(skip),
        take: parseInt(limit),
        include: {
          _count: {
            select: { claims: true },
          },
        },
        orderBy: { name: "asc" },
      });

      const totalCount = await prisma.customer.count({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
            { city: { contains: query, mode: "insensitive" } },
            { number: { contains: query } },
          ],
        },
      });

      const formattedCustomers = customers.map((customer) => ({
        ...customer,
        claimsCount: customer._count.claims,
      }));

      res.status(200).json({
        customers: formattedCustomers,
        pagination: {
          total: totalCount,
          page: parseInt(page),
          limit: parseInt(limit),
          pages: Math.ceil(totalCount / limit),
        },
      });
    } catch (error) {
      console.error("Search customers error:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
};

module.exports = customerController;
