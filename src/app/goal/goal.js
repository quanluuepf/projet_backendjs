'use server'

import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function addGoal({ formData }) {
    const data = Object.fromEntries(formData)
    await Prisma.student.create({
        data: {
            name: data.name,
            description: data.description,
            level: data.level,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
    })
    revalidatePath('/goal')

}