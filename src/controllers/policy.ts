import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const policyController = {
  // Get all policy types with pagination
  getAllPolicies: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const policies = await prisma.policyType.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      const total = await prisma.policyType.count();

      res.json({
        data: policies,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error fetching policies:", error);
      res.status(500).json({ error: "Failed to fetch policies" });
    }
  },

  // Get policy by id
  getPolicyById: async (req, res) => {
    try {
      const { id } = req.params;

      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
        include: {
          claims: {
            include: {
              customer: true,
              employee: true,
            },
          },
        },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      res.json(policy);
    } catch (error) {
      console.error("Error fetching policy:", error);
      res.status(500).json({ error: "Failed to fetch policy" });
    }
  },

  // Create new policy
  createPolicy: async (req, res) => {
    try {
      const { data, metadata } = req.body;

      // Validate required data
      if (!data || typeof data !== "object") {
        return res
          .status(400)
          .json({ error: "Policy data is required and must be an object" });
      }

      // Create the policy
      const newPolicy = await prisma.policyType.create({
        data: {
          data,
          metadata: metadata || {},
        },
      });

      res.status(201).json(newPolicy);
    } catch (error) {
      console.error("Error creating policy:", error);
      res.status(500).json({ error: "Failed to create policy" });
    }
  },

  // Update policy
  updatePolicy: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, metadata } = req.body;

      // Check if policy exists
      const existingPolicy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
      });

      if (!existingPolicy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      // Update the policy
      const updatedPolicy = await prisma.policyType.update({
        where: { id: parseInt(id) },
        data: {
          data: data !== undefined ? data : existingPolicy.data,
          metadata: metadata !== undefined ? metadata : existingPolicy.metadata,
        },
      });

      res.json(updatedPolicy);
    } catch (error) {
      console.error("Error updating policy:", error);
      res.status(500).json({ error: "Failed to update policy" });
    }
  },

  // Delete policy
  deletePolicy: async (req, res) => {
    try {
      const { id } = req.params;

      // Check if policy exists
      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
        include: { claims: true },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      // Check if policy has associated claims
      if (policy.claims.length > 0) {
        return res.status(400).json({
          error:
            "Cannot delete policy with associated claims. Delete the claims first or update them to use a different policy.",
        });
      }

      // Delete the policy
      await prisma.policyType.delete({
        where: { id: parseInt(id) },
      });

      res.json({ message: "Policy deleted successfully" });
    } catch (error) {
      console.error("Error deleting policy:", error);
      res.status(500).json({ error: "Failed to delete policy" });
    }
  },

  // Get policy analytics
  getPolicyAnalytics: async (req, res) => {
    try {
      // Count claims by policy type
      const policiesWithClaimCount = await prisma.policyType.findMany({
        include: {
          _count: {
            select: { claims: true },
          },
        },
      });

      // Get total claims
      const totalClaims = await prisma.claim.count();

      // Calculate percentages and format data
      const analytics = policiesWithClaimCount.map((policy) => {
        const claimCount = policy._count.claims;
        const percentage =
          totalClaims > 0 ? (claimCount / totalClaims) * 100 : 0;

        return {
          id: policy.id,
          data: policy.data,
          claimCount,
          percentage: parseFloat(percentage.toFixed(2)),
        };
      });

      // Sort by claim count (descending)
      analytics.sort((a, b) => b.claimCount - a.claimCount);

      res.json({
        totalPolicies: policiesWithClaimCount.length,
        totalClaims,
        policyAnalytics: analytics,
      });
    } catch (error) {
      console.error("Error fetching policy analytics:", error);
      res.status(500).json({ error: "Failed to fetch policy analytics" });
    }
  },

  // Get claims by date range for a specific policy
  getPolicyClaimsByDateRange: async (req, res) => {
    try {
      const { id } = req.params;
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res
          .status(400)
          .json({ error: "Start date and end date are required" });
      }

      // Parse dates
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Validate dates
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
      }

      // Set end date to end of day
      end.setHours(23, 59, 59, 999);

      // Get claims for the policy within date range
      const claims = await prisma.claim.findMany({
        where: {
          policy_id: parseInt(id),
          createdAt: {
            gte: start,
            lte: end,
          },
        },
        include: {
          customer: true,
          employee: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      // Group claims by date
      const claimsByDate = {};
      claims.forEach((claim) => {
        const dateKey = claim.createdAt.toISOString().split("T")[0];
        if (!claimsByDate[dateKey]) {
          claimsByDate[dateKey] = [];
        }
        claimsByDate[dateKey].push(claim);
      });

      res.json({
        policyId: parseInt(id),
        dateRange: {
          start: start.toISOString(),
          end: end.toISOString(),
        },
        totalClaims: claims.length,
        claimsByDate,
      });
    } catch (error) {
      console.error("Error fetching policy claims by date range:", error);
      res
        .status(500)
        .json({ error: "Failed to fetch policy claims by date range" });
    }
  },

  // Search policies
  searchPolicies: async (req, res) => {
    try {
      const { query } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      // Since data is a JSON field, we need to search within its content
      // This approach varies based on the database being used
      // For PostgreSQL, you can use jsonb containment operators
      const policies = await prisma.$queryRaw`
        SELECT * FROM "PolicyType"
        WHERE to_tsvector('english', data::text) @@ to_tsquery('english', ${query})
        LIMIT ${limit} OFFSET ${skip}
      `;

      // Count total results (may be inefficient for large datasets)
      const countResult = await prisma.$queryRaw`
        SELECT COUNT(*) FROM "PolicyType"
        WHERE to_tsvector('english', data::text) @@ to_tsquery('english', ${query})
      `;

      const total = parseInt(countResult[0].count);

      res.json({
        data: policies,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error("Error searching policies:", error);
      res.status(500).json({ error: "Failed to search policies" });
    }
  },

  // Bulk create policies
  bulkCreatePolicies: async (req, res) => {
    try {
      const { policies } = req.body;

      if (!Array.isArray(policies) || policies.length === 0) {
        return res
          .status(400)
          .json({ error: "Policies must be a non-empty array" });
      }

      // Validate all policies have the required data
      for (const policy of policies) {
        if (!policy.data || typeof policy.data !== "object") {
          return res.status(400).json({
            error: "Each policy must have data field as an object",
          });
        }
      }

      // Create the policies
      const createdPolicies = await prisma.$transaction(
        policies.map((policy) =>
          prisma.policyType.create({
            data: {
              data: policy.data,
              metadata: policy.metadata || {},
            },
          })
        )
      );

      res.status(201).json({
        message: `Successfully created ${createdPolicies.length} policies`,
        policies: createdPolicies,
      });
    } catch (error) {
      console.error("Error bulk creating policies:", error);
      res.status(500).json({ error: "Failed to bulk create policies" });
    }
  },
};
