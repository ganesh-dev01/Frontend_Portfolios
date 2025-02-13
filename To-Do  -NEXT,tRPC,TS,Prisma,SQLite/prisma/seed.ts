import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

async function main() {
    const hashedPassword = await bcrypt.hash('123456', 10); // Encrypt password

    await prisma.admin.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log('✅ Admin account created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
