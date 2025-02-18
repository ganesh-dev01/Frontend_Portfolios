// pages/api/tasks/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id }, // Get task ID from the URL
        body,
        method,
    } = req;

    switch (method) {
        case 'PUT':
            // Update task with title, description, deadline, and status
            try {
                const updatedTask = await prisma.task.update({
                    where: { id: String(id) }, // Find the task by id
                    data: {
                        title: body.title, // Update title
                        description: body.description, // Update description
                        deadline: body.deadline, // Update deadline
                        status: body.status, // Update status
                    },
                });
                res.status(200).json(updatedTask);
            } catch (error) {
                console.error('Error updating task:', error);
                res.status(500).json({ message: 'Error updating task' });
            }
            break;
        case 'DELETE':
            // Delete task
            try {
                await prisma.task.delete({
                    where: { id: String(id) },
                });
                res.status(200).json({ message: 'Task deleted successfully' });
            } catch (error) {
                console.error('Error deleting task:', error);
                res.status(500).json({ message: 'Error deleting task' });
            }
            break;
        default:
            res.setHeader('Allow', ['PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
