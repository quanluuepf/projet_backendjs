'use client'; // Ajoute cette directive en haut du fichier

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [skills, setSkills] = useState([
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'php', name: 'PHP' },
    { id: 'react', name: 'React' },
  ]);

  const router = useRouter();

  const handleNavigation = (id) => {
    console.log(`Navigating to /skills/${id}`); // Ajoute cette ligne pour déboguer
    router.push(`/skills/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8 pb-20 flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Liste des compétences
        </h1>
        <ul className="space-y-4">
          {skills.map((skill) => (
            <li key={skill.id}>
              <button
                onClick={() => handleNavigation(skill.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {skill.name}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
