import { Prisma } from "@prisma/client"

export default async function StudentsPage() {
    // Accès direct DB sans API
    const students = await Prisma.student.findMany()
    return (
    <main>
    <h1>Liste des Étudiants</h1>
    {/* Passe les données au client */}
    <StudentList students={students} />
    <AddStudentForm />
    </main>
    )
    }