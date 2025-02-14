'use client';

import { use } from 'react';
import GoalForm from '../../../components/GoalForm';

export default function SkillPage({ params }) {
  const { id } = use(params); // Déstructure les paramètres correctement

  return (
    <div>
      <h1>Compétence ID: {id}</h1>
      <h1>Voici les objectifs de la compétence</h1>
      <GoalForm />
    </div>
  );
}
