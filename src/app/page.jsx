'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button"; 
import dynamic from 'next/dynamic';

// Chargement dynamique des composants
const Card = dynamic(() => import('@shadcn/ui').then((mod) => mod.Card), {
  ssr: true, // Rendu côté serveur uniquement
});
const CardHeader = dynamic(() => import('@shadcn/ui').then((mod) => mod.CardHeader), { ssr: true });
const CardTitle = dynamic(() => import('@shadcn/ui').then((mod) => mod.CardTitle), { ssr: true });
const CardContent = dynamic(() => import('@shadcn/ui').then((mod) => mod.CardContent), { ssr: true });

export default function Home() {
  // Définition d'une liste de compétences
  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "React",
    "Node.js",
    "Git"
  ]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Card pour afficher la liste des compétences */}
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Liste des compétences</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {/* Affichage des compétences sous forme de boutons */}
              {skills.map((skill, index) => (
                <li key={index}>
                  <Button variant="outline">{skill}</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
