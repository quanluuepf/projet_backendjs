import prisma from "@/lib/prisma"; 
import StudentList from "@/components/StudentList";
import AddStudentForm from "@/components/AddStudentForm";

export default async function StudentsPage() {
    // Récupération des étudiants depuis la base de données
    const students = await prisma.student.findMany();

    return (
        <main>
            <h1>Liste des Étudiants</h1>
            {/* Passe les données au client */}
            <StudentList students={students} />
            <AddStudentForm />
        </main>
    );
}
