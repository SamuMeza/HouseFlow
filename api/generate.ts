// Vercel Serverless Function: api/generate.ts
// Lógica agnóstica de IA (Gemini/OpenRouter)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { extractCleanText, extractImages } from './services/htmlCleaner';
import { generateMarketingKit } from './services/aiProvider';

const handler = async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    // Extraemos la URL que envió el usuario desde el Home.tsx
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'La URL es obligatoria' });
    }
    try {
        // Descargamos el HTML crudo de la inmobiliaria
        const response = await fetch(url);
        const html = await response.text();
        const cleanText = extractCleanText(html);
        const mainImage = extractImages(html);

        // Le pasamos el texto limpio a nuestro "Cerebro" (Gemini)
        const marketingKit = await generateMarketingKit(cleanText);

        // Devolvemos el resultado final al Dashboard de React
        // Aquí le agregamos un ID y fecha manualmente para completar la interfaz HouseFlow.ts
        return res.status(200).json({
            id: crypto.randomUUID(),
            originalUrl: url,
            createdAt: new Date().toISOString(),
            ...marketingKit,
            mainImage,
        });
    } catch (error: any) {
        console.error('Error en el proceso de generación:', error);
        return res.status(500).json({ error: 'Error interno al procesar la propiedad' });
    }
}

export default handler;