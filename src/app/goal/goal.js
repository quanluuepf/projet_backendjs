"use client";

import { useState } from "react";

export default function GoalForm() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const response = await fetch("./api/addGoal", { // Vérifie bien la route
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        setMessage(result.message);
    }

    return (
        <form id="myForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom du goal" required />
            <input type="text" name="description" placeholder="Description" required />
            <input type="text" name="level" placeholder="Niveau" required />
            <button type="submit">Ajouter</button>
            {message && <p>{message}</p>}
        </form>
    );
}
