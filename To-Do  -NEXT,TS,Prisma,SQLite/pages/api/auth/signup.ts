import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { fullName, email, password} = req.body;

 
    try {
 
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await prisma.user.create({
            data: { 
                fullName, 
                email, 
                password,  
                role: "user"  
            },
        });

        return res.status(201).json({ message: "User created successfully", user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email, role: newUser.role } });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error instanceof Error ? error.message : error });
    }
}
