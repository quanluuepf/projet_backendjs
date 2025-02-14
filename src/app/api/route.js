export async function POST(request) {
    const body = await request.json();
    
    return new Response(JSON.stringify({ success: true, message: 'Goal added successfully!' }), {
        status: 200,
    });
}
