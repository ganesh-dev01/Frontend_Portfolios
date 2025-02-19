import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const adminEmail = "admin@example.com";
  const { email } = req.query; 

  if (!email) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        accessRights: true,
        tasks: {
          select: {
            id: true,
            title: true,
            description: true,
            createdAt: true,
            deadline: true
          }
        }
      },
    });

    if (email === adminEmail) {
      return res.status(200).json(users);
    } else {
      const user = users.find(user => user.email === email);
      if (user) {
        return res.status(200).json([user]);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}