import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"; // ✅ Import authOptions

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions); // ✅ Correct session retrieval

  if (!session || !session.user?.email) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.method === "POST") {
      const { title, description, deadline } = req.body;

      if (!title || !deadline) {
        return res.status(400).json({ message: "Title and deadline are required" });
      }

      const task = await prisma.task.create({
        data: {
          title,
          description: description || "",
          deadline: new Date(deadline),
          userId: user.id,
        },
      });

      return res.status(201).json(task);
    }

    if (req.method === "GET") {
      const tasks = await prisma.task.findMany({
        where: { userId: user.id },
      });

      return res.status(200).json(tasks);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
