import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === "PUT") {
        const { title, description } = req.body;
        const updatedTask = await prisma.task.update({
            where: { id: id as string },
            data: { title, description },
        });
        return res.json(updatedTask);
    }

    if (req.method === "PATCH") {
        const updatedTask = await prisma.task.update({
            where: { id: id as string },
            data: { isDone: true },
        });
        return res.json(updatedTask);
    }

    if (req.method === "DELETE") {
        await prisma.task.delete({ where: { id: id as string } });
        return res.json({ message: "Task deleted" });
    }

    res.status(405).end();
}
