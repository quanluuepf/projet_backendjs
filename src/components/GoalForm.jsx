'use client';

import { useState } from 'react';
import { addGoal } from '../app/goal/goal';

export default function GoalForm() {
    const [message, setMessage] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const result = await addGoal({ formData });

        if (result.success) {
            setMessage("Goal ajouté avec succès !");
        } else {
            setMessage(`Erreur : ${result.message}`);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Ajouter un nouveau Goal
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Entrez votre nom"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Entrez une description"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Niveau
                        </label>
                        <input
                            type="text"
                            name="level"
                            placeholder="Entrez le niveau"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Ajouter
                    </button>
                </form>
                {message && (
                    <p className={`mt-4 text-center ${message.startsWith("Erreur") ? "text-red-500" : "text-green-500"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}