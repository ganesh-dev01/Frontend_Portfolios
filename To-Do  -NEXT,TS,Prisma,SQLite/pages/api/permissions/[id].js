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
      const { accessRights } = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: String(id) },
        data: { accessRights },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user permissions:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}