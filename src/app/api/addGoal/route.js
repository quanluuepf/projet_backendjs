export async function POST(req) {
    try {
        const formData = await req.json();
        console.log("Nouvel objectif reçu :", formData);

        return new Response(JSON.stringify({ success: true, message: "Objectif ajouté !" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Erreur serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
