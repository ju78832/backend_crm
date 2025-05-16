import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Employee controllers
export const createEmployee = async (req, res) => {
  try {
    const { name, position, data } = req.body;

    // Create new employee
    const newEmployee = await prisma.employee.create({
      data: {
        name,
        position,
        data: data || {},
      },
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    console.error("Create employee error:", error);
    res
      .status(500)
      .json({ message: "Failed to create employee", error: error.message });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Build filter conditions
    let where = {};
    if (search) {
      where = {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { position: { contains: search, mode: "insensitive" } },
        ],
      };
    }

    // Get employees with pagination
    const employees = await prisma.employee.findMany({
      where,
      skip,
      take: parseInt(limit),
      orderBy: { [sortBy]: order.toLowerCase() },
      include: {
        _count: {
          select: { claims: true },
        },
      },
    });

    // Get total count for pagination
    const totalCount = await prisma.employee.count({ where });

    res.status(200).json({
      employees: employees.map((employee) => ({
        ...employee,
        claimsCount: employee._count.claims,
      })),
      pagination: {
        total: totalCount,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(totalCount / parseInt(limit)),
      },
    });
  } catch (error) {
    console.error("Get employees error:", error);
    res
      .status(500)
      .json({ message: "Failed to retrieve employees", error: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
      include: {
        claims: {
          include: {
            customer: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            policyType: true,
          },
        },
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error("Get employee error:", error);
    res
      .status(500)
      .json({ message: "Failed to retrieve employee", error: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, data } = req.body;

    // Check if employee exists
    const existingEmployee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Prepare updated data
    const updatedData = {
      ...existingEmployee.data,
      ...(data || {}),
    };

    // Update employee
    const updatedEmployee = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: {
        name,
        position,
        data: updatedData,
      },
    });

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error("Update employee error:", error);
    res
      .status(500)
      .json({ message: "Failed to update employee", error: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if employee exists
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
      include: { claims: true },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if employee has claims
    if (employee.claims.length > 0) {
      return res.status(400).json({
        message:
          "Cannot delete employee with associated claims. Please reassign or delete the claims first.",
      });
    }

    // Delete employee
    await prisma.employee.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Delete employee error:", error);
    res
      .status(500)
      .json({ message: "Failed to delete employee", error: error.message });
  }
};

export const getEmployeeStatistics = async (req, res) => {
  try {
    // Get total employees count
    const totalEmployees = await prisma.employee.count();

    // Get employees by position
    const employeesByPosition = await prisma.employee.groupBy({
      by: ["position"],
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: "desc",
        },
      },
      where: {
        position: {
          not: null,
        },
      },
    });

    // Get top 5 employees by claim count
    const topEmployeesByClaims = await prisma.employee.findMany({
      include: {
        _count: {
          select: { claims: true },
        },
      },
      orderBy: {
        claims: {
          _count: "desc",
        },
      },
      take: 5,
    });

    // Get new employees in the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const newEmployees = await prisma.employee.count({
      where: {
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
    });

    res.status(200).json({
      totalEmployees,
      newEmployeesLast30Days: newEmployees,
      employeesByPosition: employeesByPosition.map((item) => ({
        position: item.position || "Not specified",
        count: item._count.id,
      })),
      topEmployeesByClaims: topEmployeesByClaims.map((emp) => ({
        id: emp.id,
        name: emp.name,
        position: emp.position,
        claimsCount: emp._count.claims,
      })),
    });
  } catch (error) {
    console.error("Get employee statistics error:", error);
    res
      .status(500)
      .json({
        message: "Failed to retrieve employee statistics",
        error: error.message,
      });
  }
};

export const getEmployeePerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const { period = "30" } = req.query;

    // Check if employee exists
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Calculate start date based on period
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(period));

    // Get claims in the period
    const claims = await prisma.claim.findMany({
      where: {
        employee_id: parseInt(id),
        createdAt: {
          gte: startDate,
        },
      },
      include: {
        policyType: true,
      },
    });

    // Process claims by date
    const claimsByDate = {};
    const claimsByPolicyType = {};

    claims.forEach((claim) => {
      // Format date as YYYY-MM-DD
      const dateStr = claim.createdAt.toISOString().split("T")[0];

      // Count claims by date
      if (!claimsByDate[dateStr]) {
        claimsByDate[dateStr] = 0;
      }
      claimsByDate[dateStr]++;

      // Count claims by policy type
      const policyTypeId = claim.policy_id.toString();
      const policyTypeName =
        claim.policyType?.data?.name || `Policy Type ${policyTypeId}`;

      if (!claimsByPolicyType[policyTypeName]) {
        claimsByPolicyType[policyTypeName] = 0;
      }
      claimsByPolicyType[policyTypeName]++;
    });

    res.status(200).json({
      employeeId: employee.id,
      employeeName: employee.name,
      period: `Last ${period} days`,
      totalClaims: claims.length,
      claimsPerDay: Object.entries(claimsByDate).map(([date, count]) => ({
        date,
        count,
      })),
      claimsByPolicyType: Object.entries(claimsByPolicyType).map(
        ([policyType, count]) => ({ policyType, count })
      ),
    });
  } catch (error) {
    console.error("Get employee performance error:", error);
    res
      .status(500)
      .json({
        message: "Failed to retrieve employee performance",
        error: error.message,
      });
  }
};
