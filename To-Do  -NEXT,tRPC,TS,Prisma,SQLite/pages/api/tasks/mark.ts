import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PATCH") return res.status(405).json({ error: "Method Not Allowed" });

    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "Task ID required" });

    try {
        await prisma.task.update({
            where: { id },
            data: { isDone: true }
        });
        return res.status(200).json({ message: "Task marked as done" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to mark task as done" });
    }
}
