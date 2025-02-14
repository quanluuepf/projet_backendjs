import { useState } from 'react';

export default function GoalForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('level', level);
        const res = await fetch('@/api/addGoal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Ajoute cette ligne !
            },
            body: JSON.stringify({ name, description, level }),
        });
        
        const data = await res.json();
        
        if (data.success) {
            setMessage('✅ Goal ajouté avec succès !');
        } else {
            setMessage(`❌ Erreur: ${data.message}`);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Ajouter un Objectif</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium">Nom</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Description</label>
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Niveau</label>
                    <input 
                        type="text" 
                        value={level} 
                        onChange={(e) => setLevel(e.target.value)} 
                        required 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition duration-200"
                >
                    Ajouter
                </button>
            </form>

            {message && (
                <p className={`mt-4 p-2 text-center rounded-lg text-sm ${message.includes('Erreur') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
