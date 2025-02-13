import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const { title, description, deadline, userEmail } = req.body;
    if (!title || !description || !deadline || !userEmail) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        const task = await prisma.task.create({
            data: { title, description, deadline: new Date(deadline), userEmail }
        });
        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json({ error: "Failed to create task" });
    }
}
