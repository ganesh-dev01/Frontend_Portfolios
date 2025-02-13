import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { email } = req.query;
        const tasks = await prisma.task.findMany({ where: { userEmail: email as string } });
        return res.json(tasks);
    }

    if (req.method === "POST") {
        const { title, description, userEmail } = req.body;
        const task = await prisma.task.create({ data: { title, description, userEmail, deadline: new Date(), isDone: false } });
        return res.json(task);
    }

    res.status(405).end();
}
