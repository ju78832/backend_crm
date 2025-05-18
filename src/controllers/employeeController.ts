import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
    });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await prisma.employee.create({
      data: req.body,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to update employee" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
};

export const getEmployeeClaims = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const claims = await prisma.claim.findMany({
      where: { employee_id: parseInt(id) },
    });
    res.json(claims);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee claims" });
  }
};

export const getEmployeePerformance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(id) },
      select: { data: true },
    });
    if (!employee || !employee.data) {
      return res.status(404).json({ error: "Performance data not found" });
    }
    res.json(employee.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee performance" });
  }
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeClaims,
  getEmployeePerformance,
};
