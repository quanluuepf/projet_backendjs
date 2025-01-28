'use client'

import { useState } from "react"
import { addGoal } from "../../goal/goal"

export default function GoalForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [level, setLevel] = useState('')
   
    return(
    <div>
        <form action={addGoal} formMethod="get">
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Nom de l'objectif" value={name} />
            <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Description de l'objectif"value={description} />
            <select value={level} onChange={e => setLevel(e.target.value)}>
                <option >Easy</option>
                <option >Medium</option>
                <option >Hard</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
    </div>
    )
}