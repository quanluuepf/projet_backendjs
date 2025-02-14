import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectDB() {
    try {
        await prisma.$connect();
        console.log("Connecté à Prisma");
    } catch (error) {
        console.error("Erreur de connexion à Prisma :", error);
    }
}

connectDB();

export default prisma;
