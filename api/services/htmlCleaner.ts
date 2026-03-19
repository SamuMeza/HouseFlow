// api/services/htmlCleaner.ts
// Utilidad de purga de ruido (node-html-parser)

import { parse } from "node-html-parser";

export const extractCleanText = (htmlString: string): string => {
    const root = parse(htmlString);

    // 1. Buscamos todas las etiquetas que NO contienen información útil de la casa y las eliminamos
    root.querySelectorAll('script, style, nav, footer, header, iframe, noscript').forEach(element => element.remove());

    // 2. Esto asegura que el texto se vea "limpio" sin estilos extraños
    root.querySelectorAll('*').forEach(element => {
        element.removeAttribute('style');
        element.removeAttribute('class');
    });

    // 3. Una vez purgado el ruido, sacamos todo el texto puro que sobró.
    let cleanText = root.textContent;

    return cleanText.trim();
}

export const extractImages = (html: string): string => {
    const root = parse(html);

    // Buscamos etiquetas meta de "og:image" (las que usa Facebook/WhatsApp para la vista previa)
    const ogImages = root.querySelector('meta[property="og:image"]')?.getAttribute('content');

    if (ogImages) return ogImages;

    const firstImg = root.querySelector('img')?.getAttribute('src');

    return firstImg || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop';
}