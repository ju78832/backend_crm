import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const claimController = {
  // Get all claims with pagination
  getAllClaims: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const claims = await prisma.claim.findMany({
        skip,
        take: limit,
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.claim.count();

      res.json({
        data: claims,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching claims:", error);
      res.status(500).json({ error: "Failed to fetch claims" });
    }
  },

  // Get claim by id
  getClaimById: async (req, res) => {
    try {
      const { id } = req.params;

      const claim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
      });

      if (!claim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      res.json(claim);
    } catch (error) {
      console.error("Error fetching claim:", error);
      res.status(500).json({ error: "Failed to fetch claim" });
    }
  },

  // Create new claim
  createClaim: async (req, res) => {
    try {
      const { details, customer_id, employee_id, policy_id, docs, metadata } =
        req.body;

      // Validate customer exists
      const customer = await prisma.customer.findUnique({
        where: { id: parseInt(customer_id) },
      });

      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }

      // Validate employee exists
      const employee = await prisma.employee.findUnique({
        where: { id: parseInt(employee_id) },
      });

      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      // Validate policy type exists
      const policyType = await prisma.policyType.findUnique({
        where: { id: parseInt(policy_id) },
      });

      if (!policyType) {
        return res.status(404).json({ error: "Policy type not found" });
      }

      // Create the claim
      const newClaim = await prisma.claim.create({
        data: {
          details,
          customer_id: parseInt(customer_id),
          employee_id: parseInt(employee_id),
          policy_id: parseInt(policy_id),
          docs: docs || {},
          metadata: metadata || {},
        },
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
      });

      res.status(201).json(newClaim);
    } catch (error) {
      console.error("Error creating claim:", error);
      res.status(500).json({ error: "Failed to create claim" });
    }
  },

  // Update claim
  updateClaim: async (req, res) => {
    try {
      const { id } = req.params;
      const { details, customer_id, employee_id, policy_id, docs, metadata } =
        req.body;

      // Check if claim exists
      const existingClaim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
      });

      if (!existingClaim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      // Validate relations if they are being updated
      if (customer_id) {
        const customer = await prisma.customer.findUnique({
          where: { id: parseInt(customer_id) },
        });

        if (!customer) {
          return res.status(404).json({ error: "Customer not found" });
        }
      }

      if (employee_id) {
        const employee = await prisma.employee.findUnique({
          where: { id: parseInt(employee_id) },
        });

        if (!employee) {
          return res.status(404).json({ error: "Employee not found" });
        }
      }

      if (policy_id) {
        const policyType = await prisma.policyType.findUnique({
          where: { id: parseInt(policy_id) },
        });

        if (!policyType) {
          return res.status(404).json({ error: "Policy type not found" });
        }
      }

      // Update the claim
      const updatedClaim = await prisma.claim.update({
        where: { id: parseInt(id) },
        data: {
          details: details !== undefined ? details : existingClaim.details,
          customer_id: customer_id
            ? parseInt(customer_id)
            : existingClaim.customer_id,
          employee_id: employee_id
            ? parseInt(employee_id)
            : existingClaim.employee_id,
          policy_id: policy_id ? parseInt(policy_id) : existingClaim.policy_id,
          docs: docs !== undefined ? docs : existingClaim.docs,
          metadata: metadata !== undefined ? metadata : existingClaim.metadata,
        },
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
      });

      res.json(updatedClaim);
    } catch (error) {
      console.error("Error updating claim:", error);
      res.status(500).json({ error: "Failed to update claim" });
    }
  },

  // Delete claim
  deleteClaim: async (req, res) => {
    try {
      const { id } = req.params;

      const claim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
      });

      if (!claim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      await prisma.claim.delete({
        where: { id: parseInt(id) },
      });

      res.json({ message: "Claim deleted successfully" });
    } catch (error) {
      console.error("Error deleting claim:", error);
      res.status(500).json({ error: "Failed to delete claim" });
    }
  },

  // Get claims by customer
  getClaimsByCustomer: async (req, res) => {
    try {
      const { customerId } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const claims = await prisma.claim.findMany({
        where: { customer_id: parseInt(customerId) },
        skip,
        take: limit,
        include: {
          employee: true,
          policyType: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.claim.count({
        where: { customer_id: parseInt(customerId) },
      });

      res.json({
        data: claims,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching customer claims:", error);
      res.status(500).json({ error: "Failed to fetch customer claims" });
    }
  },

  // Get claims by employee
  getClaimsByEmployee: async (req, res) => {
    try {
      const { employeeId } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const claims = await prisma.claim.findMany({
        where: { employee_id: parseInt(employeeId) },
        skip,
        take: limit,
        include: {
          customer: true,
          policyType: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.claim.count({
        where: { employee_id: parseInt(employeeId) },
      });

      res.json({
        data: claims,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching employee claims:", error);
      res.status(500).json({ error: "Failed to fetch employee claims" });
    }
  },

  // Get claims by policy type
  getClaimsByPolicy: async (req, res) => {
    try {
      const { policyId } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const claims = await prisma.claim.findMany({
        where: { policy_id: parseInt(policyId) },
        skip,
        take: limit,
        include: {
          customer: true,
          employee: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.claim.count({
        where: { policy_id: parseInt(policyId) },
      });

      res.json({
        data: claims,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching policy claims:", error);
      res.status(500).json({ error: "Failed to fetch policy claims" });
    }
  },

  // Search claims
  searchClaims: async (req, res) => {
    try {
      const { query } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      // Search in claim details and related entities
      const claims = await prisma.claim.findMany({
        where: {
          OR: [
            { details: { contains: query, mode: "insensitive" } },
            { customer: { name: { contains: query, mode: "insensitive" } } },
            { employee: { name: { contains: query, mode: "insensitive" } } },
          ],
        },
        skip,
        take: limit,
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.claim.count({
        where: {
          OR: [
            { details: { contains: query, mode: "insensitive" } },
            { customer: { name: { contains: query, mode: "insensitive" } } },
            { employee: { name: { contains: query, mode: "insensitive" } } },
          ],
        },
      });

      res.json({
        data: claims,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error searching claims:", error);
      res.status(500).json({ error: "Failed to search claims" });
    }
  },

  // Get claim statistics for dashboard
  getClaimStats: async (req, res) => {
    try {
      const totalClaims = await prisma.claim.count();

      // Get claims and filter by status in metadata
      const claims = await prisma.claim.findMany({
        select: {
          metadata: true,
        },
      });

      const pendingClaims = claims.filter(
        (claim) =>
          claim.metadata && (claim.metadata as any).status === "PENDING"
      ).length;

      const approvedClaims = claims.filter(
        (claim) =>
          claim.metadata && (claim.metadata as any).status === "APPROVED"
      ).length;

      const rejectedClaims = claims.filter(
        (claim) =>
          claim.metadata && (claim.metadata as any).status === "REJECTED"
      ).length;

      res.json({
        total: totalClaims,
        pending: pendingClaims,
        approved: approvedClaims,
        rejected: rejectedClaims,
      });
    } catch (error) {
      console.error("Error fetching claim stats:", error);
      res.status(500).json({ error: "Failed to fetch claim statistics" });
    }
  },

  // Get claims by status
  getClaimsByStatus: async (req, res) => {
    try {
      const { status } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      // Get all claims and filter by status in metadata
      const allClaims = await prisma.claim.findMany({
        include: {
          customer: true,
          employee: true,
          policyType: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const filteredClaims = allClaims.filter(
        (claim) => claim.metadata && (claim.metadata as any).status === status
      );

      const paginatedClaims = filteredClaims.slice(skip, skip + limit);

      res.json({
        data: paginatedClaims,
        pagination: {
          total: filteredClaims.length,
          page,
          pages: Math.ceil(filteredClaims.length / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching claims by status:", error);
      res.status(500).json({ error: "Failed to fetch claims by status" });
    }
  },

  // Upload claim documents
  uploadClaimDocuments: async (req, res) => {
    try {
      const { id } = req.params;
      const { documents } = req.body;

      const claim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
      });

      if (!claim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      const currentDocs = (claim.docs as Record<string, any>) || {};
      const updatedDocs = { ...currentDocs, ...documents };

      const updatedClaim = await prisma.claim.update({
        where: { id: parseInt(id) },
        data: {
          docs: updatedDocs,
        },
      });

      res.json(updatedClaim);
    } catch (error) {
      console.error("Error uploading claim documents:", error);
      res.status(500).json({ error: "Failed to upload claim documents" });
    }
  },

  // Get claim documents
  getClaimDocuments: async (req, res) => {
    try {
      const { id } = req.params;

      const claim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
        select: { docs: true },
      });

      if (!claim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      res.json(claim.docs || {});
    } catch (error) {
      console.error("Error fetching claim documents:", error);
      res.status(500).json({ error: "Failed to fetch claim documents" });
    }
  },

  // Update claim status
  updateClaimStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      const claim = await prisma.claim.findUnique({
        where: { id: parseInt(id) },
      });

      if (!claim) {
        return res.status(404).json({ error: "Claim not found" });
      }

      const currentMetadata = (claim.metadata as Record<string, any>) || {};
      const updatedMetadata = {
        ...currentMetadata,
        status,
        statusUpdate: {
          status,
          notes,
          updatedAt: new Date(),
        },
      };

      const updatedClaim = await prisma.claim.update({
        where: { id: parseInt(id) },
        data: {
          metadata: updatedMetadata,
        },
      });

      res.json(updatedClaim);
    } catch (error) {
      console.error("Error updating claim status:", error);
      res.status(500).json({ error: "Failed to update claim status" });
    }
  },
};
