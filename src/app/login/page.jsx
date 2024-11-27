import express from 'express';
import bcrypt from 'bcryptjs';  // Si vous utilisez des mots de passe hashés
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());  // Middleware pour parser le JSON du corps de la requête

// Exemple d'authentification avec e-mail et mot de passe
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: {
        skills: true,  // Inclure les compétences de l'utilisateur
        goals: true,   // Inclure les objectifs de l'utilisateur
      },
    });

    // Si l'utilisateur n'existe pas, retourner une erreur
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe (si vous utilisez bcrypt pour hasher les mots de passe)
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    // Si l'utilisateur est authentifié, retourner les données utilisateur avec ses compétences et objectifs
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        difficulty: user.difficulty,
        skills: user.skills,   // Compétences de l'utilisateur
        goals: user.goals,     // Objectifs de l'utilisateur
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});


