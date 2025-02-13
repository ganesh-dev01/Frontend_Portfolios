import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

    const passwordMatch = await compare(password, admin.password);
    if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
}
