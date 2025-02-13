import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") return res.status(405).json({ error: "Method Not Allowed" });

    const { id, title, description, deadline } = req.body;
    if (!id || !title || !description || !deadline) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: { title, description, deadline: new Date(deadline) }
        });
        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(500).json({ error: "Failed to update task" });
    }
}
