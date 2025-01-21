'use client'
export default function SkillPage ({params}){
  
  const { id } = params; 
  return (
    <div>
      <h1>{id}</h1>
      <h1>Voici les objectifs de la compétences</h1>
      
    </div>
  );

};

