import { google } from '@ai-sdk/google';
import { type CoreMessage, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: CoreMessage[] } = await req.json();

        const result = await streamText({
            model: google("models/gemini-1.5-flash-latest"),
            system: "Eres un asistente de ayuda",
            messages,
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("Error en el endpoint de chat:", error);
        return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
    }
}
