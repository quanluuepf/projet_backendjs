'use server';

import prisma from '@/lib/prisma'; 
import { revalidatePath } from "next/cache";

export async function addGoal({ formData }) {
    try {
        

        if (!data.name || !data.description || !data.level) {
            throw new Error("Tous les champs sont obligatoires.");
        }

        console.log("Prisma instance:", prisma);
        console.log("Prisma student model:", prisma.student);
        
        const data = Object.fromEntries(formData);
        console.log("Données reçues :", data);

        await prisma.student.create({
            data: {
                name: data.name,
                description: data.description,
                level: data.level,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        revalidatePath('/goal');
        return { success: true, message: "Goal ajouté avec succès !" };
    } catch (error) {
        console.error("Erreur lors de l'ajout du goal :", error);
        return { success: false, message: error.message || "Une erreur s'est produite." };
    }
}
