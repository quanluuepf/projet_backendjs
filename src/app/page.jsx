'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  // Définition d'une liste de compétences
  const [skills, setSkills] = useState([
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'php', name: 'PHP' },
    { id: 'react', name: 'React' },
  ]);
  const router = useRouter()
  const handleNavigation = (id) => {
    router.push(`/skills/${id}`);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
         
          <h1>Liste des compétences </h1>
          <ul>
              {skills.map((skill) => (
                <li key={skill.id}>
                <button onClick={() => handleNavigation(skill.id)}>
                  {skill.name}
                </button>
              </li>
             ))}
        </ul>         
        </div>
        </main>
      </main>
    </div>
  );
}
