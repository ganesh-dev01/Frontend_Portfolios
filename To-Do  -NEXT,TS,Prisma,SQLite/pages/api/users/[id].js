import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const adminEmail = "admin@example.com";
  const { id, email } = req.query; 

  if (!email || email !== adminEmail) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'PUT') {
    try {
      const { title, description, deadline } = req.body;
      const updatedTask = await prisma.task.update({
        where: { id: String(id) },
        data: { title, description, deadline },
      });
      return res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.task.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}