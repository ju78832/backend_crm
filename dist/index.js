import { PrismaClient } from "../generated/prisma/index.js";
import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
const prisma = new PrismaClient();
config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    main();
    res.send("Welcome to the Insurance Claims API");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
async function main() {
    // Clean existing data
    await prisma.claim.deleteMany({});
    await prisma.policyType.deleteMany({});
    await prisma.customer.deleteMany({});
    await prisma.employee.deleteMany({});
    await prisma.userProfile.deleteMany({});
    await prisma.auth.deleteMany({});
    // Create Auth records
    const auth1 = await prisma.auth.create({
        data: {
            salt: "abc123",
            current_hash: "hashedpassword123",
            metadata: { lastLogin: "2025-05-10T14:30:00Z", loginAttempts: 0 },
        },
    });
    const auth2 = await prisma.auth.create({
        data: {
            salt: "def456",
            current_hash: "hashedpassword456",
            metadata: { lastLogin: "2025-05-12T09:15:00Z", loginAttempts: 0 },
        },
    });
    // Create UserProfile records linked to Auth
    await prisma.userProfile.create({
        data: {
            auth_id: auth1.id,
            data: { firstName: "Admin", lastName: "User", role: "administrator" },
            metadata: { theme: "dark", timezone: "UTC-5" },
        },
    });
    await prisma.userProfile.create({
        data: {
            auth_id: auth2.id,
            data: { firstName: "Agent", lastName: "Smith", role: "agent" },
            metadata: { theme: "light", timezone: "UTC" },
        },
    });
    // Create PolicyType records
    const autoPolicy = await prisma.policyType.create({
        data: {
            data: {
                name: "Auto Insurance",
                description: "Coverage for vehicles and related liabilities",
                basePremium: 1200,
            },
            metadata: { createdBy: "system", active: true },
        },
    });
    const homePolicy = await prisma.policyType.create({
        data: {
            data: {
                name: "Home Insurance",
                description: "Coverage for residential properties",
                basePremium: 950,
            },
            metadata: { createdBy: "system", active: true },
        },
    });
    const lifePolicy = await prisma.policyType.create({
        data: {
            data: {
                name: "Life Insurance",
                description: "Term and whole life coverage options",
                basePremium: 650,
            },
            metadata: { createdBy: "system", active: true },
        },
    });
    // Create Customers
    const john = await prisma.customer.create({
        data: {
            name: "John Doe",
            city: "New York",
            number: "212-555-1234",
            email: "john.doe@example.com",
        },
    });
    const jane = await prisma.customer.create({
        data: {
            name: "Jane Smith",
            city: "Los Angeles",
            number: "310-555-6789",
            email: "jane.smith@example.com",
        },
    });
    const bob = await prisma.customer.create({
        data: {
            name: "Bob Johnson",
            city: "Chicago",
            number: "312-555-4321",
            email: "bob.johnson@example.com",
        },
    });
    // Create Employees
    const sarah = await prisma.employee.create({
        data: {
            name: "Sarah Williams",
            position: "Claims Adjuster",
            data: {
                department: "Claims",
                hireDate: "2023-03-15",
                yearsExperience: 5,
            },
        },
    });
    const michael = await prisma.employee.create({
        data: {
            name: "Michael Brown",
            position: "Senior Agent",
            data: { department: "Sales", hireDate: "2020-06-22", yearsExperience: 8 },
        },
    });
    // Create Claims
    await prisma.claim.create({
        data: {
            details: "Vehicle collision damage to front bumper",
            customer_id: john.id,
            employee_id: sarah.id,
            policy_id: autoPolicy.id,
            docs: {
                policeReport: true,
                photoEvidence: true,
                estimateProvided: true,
            },
            metadata: {
                status: "In Progress",
                priority: "Medium",
                claimAmount: 2500,
                incidentDate: "2025-04-01",
            },
        },
    });
    await prisma.claim.create({
        data: {
            details: "Water damage from burst pipe in kitchen",
            customer_id: jane.id,
            employee_id: sarah.id,
            policy_id: homePolicy.id,
            docs: {
                photoEvidence: true,
                estimateProvided: true,
                contractorReport: true,
            },
            metadata: {
                status: "Approved",
                priority: "High",
                claimAmount: 5800,
                incidentDate: "2025-03-28",
            },
        },
    });
    await prisma.claim.create({
        data: {
            details: "Windshield crack from highway debris",
            customer_id: bob.id,
            employee_id: michael.id,
            policy_id: autoPolicy.id,
            docs: {
                photoEvidence: true,
                estimateProvided: true,
            },
            metadata: {
                status: "Completed",
                priority: "Low",
                claimAmount: 450,
                incidentDate: "2025-04-10",
            },
        },
    });
    console.log("Database has been seeded!");
}
//# sourceMappingURL=index.js.map