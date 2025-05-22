import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

// Type definitions for the policy structure
interface PolicyNode {
  current: string;
  child_exists: boolean;
  child?: PolicyNode[];
}

type PolicyData = PolicyNode[];

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

  // Get policy structure (flattened hierarchy for easy access)
  getPolicyStructure: async (req, res) => {
    try {
      const { id } = req.params;

      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      const flattenPolicyStructure = (
        nodes: PolicyNode[],
        path: string[] = []
      ): any[] => {
        const result = [];

        for (const node of nodes) {
          const currentPath = [...path, node.current];
          result.push({
            name: node.current,
            path: currentPath.join(" > "),
            level: currentPath.length,
            has_children: node.child_exists,
            full_path: currentPath,
          });

          if (node.child_exists && node.child) {
            result.push(...flattenPolicyStructure(node.child, currentPath));
          }
        }

        return result;
      };

      const structure = flattenPolicyStructure(
        policy.data as unknown as PolicyData
      );

      res.json({
        policy_id: policy.id,
        structure,
        total_nodes: structure.length,
      });
    } catch (error) {
      console.error("Error fetching policy structure:", error);
      res.status(500).json({ error: "Failed to fetch policy structure" });
    }
  },

  // Get specific policy node by path
  getPolicyNodeByPath: async (req, res) => {
    try {
      const { id } = req.params;
      const { path } = req.query; // e.g., "marine>container>box_container"

      if (!path) {
        return res.status(400).json({ error: "Path parameter is required" });
      }

      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      const pathArray = (path as string)
        .split(">")
        .map((p) => p.trim().toLowerCase());

      const findNodeByPath = (
        nodes: PolicyNode[],
        targetPath: string[]
      ): PolicyNode | null => {
        for (const node of nodes) {
          if (node.current.toLowerCase() === targetPath[0]) {
            if (targetPath.length === 1) {
              return node;
            }
            if (node.child_exists && node.child) {
              return findNodeByPath(node.child, targetPath.slice(1));
            }
          }
        }
        return null;
      };

      const foundNode = findNodeByPath(
        policy.data as unknown as PolicyData,
        pathArray
      );

      if (!foundNode) {
        return res
          .status(404)
          .json({ error: "Policy node not found at specified path" });
      }

      res.json({
        policy_id: policy.id,
        path: pathArray.join(" > "),
        node: foundNode,
      });
    } catch (error) {
      console.error("Error fetching policy node:", error);
      res.status(500).json({ error: "Failed to fetch policy node" });
    }
  },

  // Get all leaf nodes (policies without children)
  getPolicyLeafNodes: async (req, res) => {
    try {
      const { id } = req.params;

      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      const getLeafNodes = (
        nodes: PolicyNode[],
        path: string[] = []
      ): any[] => {
        const leafNodes = [];

        for (const node of nodes) {
          const currentPath = [...path, node.current];

          if (!node.child_exists) {
            leafNodes.push({
              name: node.current,
              path: currentPath.join(" > "),
              level: currentPath.length,
              full_path: currentPath,
            });
          } else if (node.child) {
            leafNodes.push(...getLeafNodes(node.child, currentPath));
          }
        }

        return leafNodes;
      };

      const leafNodes = getLeafNodes(policy.data as unknown as PolicyData);

      res.json({
        policy_id: policy.id,
        leaf_nodes: leafNodes,
        total_leaf_nodes: leafNodes.length,
      });
    } catch (error) {
      console.error("Error fetching policy leaf nodes:", error);
      res.status(500).json({ error: "Failed to fetch policy leaf nodes" });
    }
  },

  // Create new policy with validation for hierarchical structure
  createPolicy: async (req, res) => {
    try {
      const { data, metadata } = req.body;

      // Validate required data
      if (!data || !Array.isArray(data)) {
        return res
          .status(400)
          .json({
            error:
              "Policy data is required and must be an array of policy nodes",
          });
      }

      // Validate policy structure
      const validatePolicyNode = (node: any): boolean => {
        if (!node || typeof node !== "object") return false;
        if (!node.current || typeof node.current !== "string") return false;
        if (typeof node.child_exists !== "boolean") return false;

        if (node.child_exists) {
          if (!node.child || !Array.isArray(node.child)) return false;
          return node.child.every(validatePolicyNode);
        }

        return true;
      };

      const isValidStructure = data.every(validatePolicyNode);
      if (!isValidStructure) {
        return res.status(400).json({
          error:
            "Invalid policy structure. Each node must have 'current', 'child_exists', and 'child' (if child_exists is true) properties",
        });
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

      // Validate policy structure if data is being updated
      if (data !== undefined) {
        if (!Array.isArray(data)) {
          return res.status(400).json({
            error: "Policy data must be an array of policy nodes",
          });
        }

        const validatePolicyNode = (node: any): boolean => {
          if (!node || typeof node !== "object") return false;
          if (!node.current || typeof node.current !== "string") return false;
          if (typeof node.child_exists !== "boolean") return false;

          if (node.child_exists) {
            if (!node.child || !Array.isArray(node.child)) return false;
            return node.child.every(validatePolicyNode);
          }

          return true;
        };

        const isValidStructure = data.every(validatePolicyNode);
        if (!isValidStructure) {
          return res.status(400).json({
            error: "Invalid policy structure",
          });
        }
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

  // Add a new node to existing policy structure
  addPolicyNode: async (req, res) => {
    try {
      const { id } = req.params;
      const { parentPath, newNode } = req.body;

      if (!newNode || !newNode.current) {
        return res
          .status(400)
          .json({ error: "New node with 'current' field is required" });
      }

      const policy = await prisma.policyType.findUnique({
        where: { id: parseInt(id) },
      });

      if (!policy) {
        return res.status(404).json({ error: "Policy not found" });
      }

      const policyData = JSON.parse(JSON.stringify(policy.data)) as PolicyData;

      // Add to root level if no parent path
      if (!parentPath) {
        policyData.push({
          current: newNode.current,
          child_exists: newNode.child_exists || false,
          child: newNode.child || [],
        });
      } else {
        // Find parent node and add child
        const pathArray = parentPath
          .split(">")
          .map((p) => p.trim().toLowerCase());

        const addToParent = (
          nodes: PolicyNode[],
          targetPath: string[]
        ): boolean => {
          for (const node of nodes) {
            if (node.current.toLowerCase() === targetPath[0]) {
              if (targetPath.length === 1) {
                // Found parent, add child
                if (!node.child) node.child = [];
                node.child.push({
                  current: newNode.current,
                  child_exists: newNode.child_exists || false,
                  child: newNode.child || [],
                });
                node.child_exists = true;
                return true;
              }
              if (node.child) {
                return addToParent(node.child, targetPath.slice(1));
              }
            }
          }
          return false;
        };

        const added = addToParent(policyData, pathArray);
        if (!added) {
          return res.status(404).json({ error: "Parent path not found" });
        }
      }

      // Update the policy
      const updatedPolicy = await prisma.policyType.update({
        where: { id: parseInt(id) },
        data: { data: JSON.stringify(policyData) },
      });

      res.json(updatedPolicy);
    } catch (error) {
      console.error("Error adding policy node:", error);
      res.status(500).json({ error: "Failed to add policy node" });
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

  // Get policy analytics with hierarchical breakdown
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

      // Calculate analytics with hierarchical breakdown
      const analytics = policiesWithClaimCount.map((policy) => {
        const claimCount = policy._count.claims;
        const percentage =
          totalClaims > 0 ? (claimCount / totalClaims) * 100 : 0;

        // Count nodes at each level
        const countNodesByLevel = (
          nodes: PolicyNode[],
          level = 1
        ): Record<number, number> => {
          const counts = { [level]: nodes.length };

          for (const node of nodes) {
            if (node.child_exists && node.child) {
              const childCounts = countNodesByLevel(node.child, level + 1);
              Object.entries(childCounts).forEach(([lvl, count]) => {
                counts[parseInt(lvl)] = (counts[parseInt(lvl)] || 0) + count;
              });
            }
          }

          return counts;
        };

        const levelCounts = countNodesByLevel(
          policy.data as unknown as PolicyData
        );
        const totalNodes = Object.values(levelCounts).reduce(
          (sum, count) => sum + count,
          0
        );

        return {
          id: policy.id,
          data: policy.data,
          claimCount,
          percentage: parseFloat(percentage.toFixed(2)),
          nodeAnalytics: {
            totalNodes,
            nodesByLevel: levelCounts,
            maxDepth: Math.max(...Object.keys(levelCounts).map(Number)),
          },
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

  // Search policies with hierarchical structure support
  searchPolicies: async (req, res) => {
    try {
      const { query } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      if (!query) {
        return res.status(400).json({ error: "Search query is required" });
      }

      // Get all policies first (for simple implementation)
      const allPolicies = await prisma.policyType.findMany();

      // Filter policies that contain the search term in their hierarchical structure
      const searchInPolicyData = (
        nodes: PolicyNode[],
        searchTerm: string
      ): boolean => {
        return nodes.some((node) => {
          if (node.current.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
          if (node.child_exists && node.child) {
            return searchInPolicyData(node.child, searchTerm);
          }
          return false;
        });
      };

      const matchingPolicies = allPolicies.filter((policy) =>
        searchInPolicyData(
          policy.data as unknown as PolicyData,
          query as string
        )
      );

      // Apply pagination
      const paginatedResults = matchingPolicies.slice(skip, skip + limit);

      res.json({
        data: paginatedResults,
        pagination: {
          total: matchingPolicies.length,
          page,
          pages: Math.ceil(matchingPolicies.length / limit),
        },
      });
    } catch (error) {
      console.error("Error searching policies:", error);
      res.status(500).json({ error: "Failed to search policies" });
    }
  },

  // Bulk create policies with validation
  bulkCreatePolicies: async (req, res) => {
    try {
      const { policies } = req.body;

      if (!Array.isArray(policies) || policies.length === 0) {
        return res
          .status(400)
          .json({ error: "Policies must be a non-empty array" });
      }

      // Validate all policies have the required hierarchical structure
      const validatePolicyNode = (node: any): boolean => {
        if (!node || typeof node !== "object") return false;
        if (!node.current || typeof node.current !== "string") return false;
        if (typeof node.child_exists !== "boolean") return false;

        if (node.child_exists) {
          if (!node.child || !Array.isArray(node.child)) return false;
          return node.child.every(validatePolicyNode);
        }

        return true;
      };

      for (const policy of policies) {
        if (!policy.data || !Array.isArray(policy.data)) {
          return res.status(400).json({
            error:
              "Each policy must have data field as an array of policy nodes",
          });
        }

        const isValidStructure = policy.data.every(validatePolicyNode);
        if (!isValidStructure) {
          return res.status(400).json({
            error: "Invalid policy structure in one or more policies",
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

  // Initialize with default policy structure
  initializeDefaultPolicies: async (req, res) => {
    try {
      // Check if policies already exist
      const existingPolicies = await prisma.policyType.count();
      if (existingPolicies > 0) {
        return res.status(400).json({
          error:
            "Policies already exist. Use bulk create or individual create for new policies.",
        });
      }

      const defaultPolicyStructure: PolicyData = [
        {
          current: "marine",
          child_exists: true,
          child: [
            {
              current: "container",
              child_exists: true,
              child: [
                { current: "box_container", child_exists: false },
                { current: "iso_container", child_exists: false },
                { current: "reefer_container", child_exists: false },
              ],
            },
            {
              current: "import",
              child_exists: true,
              child: [
                { current: "air", child_exists: false },
                { current: "sea", child_exists: false },
              ],
            },
            {
              current: "export",
              child_exists: true,
              child: [
                { current: "air", child_exists: false },
                { current: "sea", child_exists: false },
              ],
            },
            { current: "demurrage", child_exists: false },
            { current: "inland", child_exists: false },
          ],
        },
        {
          current: "engineering",
          child_exists: true,
          child: [
            { current: "contractor_all_risk_policy", child_exists: false },
            { current: "electronic_equipment_insurance", child_exists: false },
            { current: "erectors_all_risk", child_exists: false },
            { current: "machine_breakdown", child_exists: false },
          ],
        },
        { current: "fire", child_exists: false },
        { current: "miscellaneous", child_exists: false },
        { current: "value_added_services", child_exists: false },
        { current: "client", child_exists: false },
      ];

      const newPolicy = await prisma.policyType.create({
        data: {
          data: JSON.stringify(defaultPolicyStructure),
          metadata: {
            name: "Default Policy Structure",
            description:
              "Initial policy structure with marine, engineering, fire, and other policy types",
            version: "1.0",
          },
        },
      });

      res.status(201).json({
        message: "Default policy structure initialized successfully",
        policy: newPolicy,
      });
    } catch (error) {
      console.error("Error initializing default policies:", error);
      res.status(500).json({ error: "Failed to initialize default policies" });
    }
  },
};
