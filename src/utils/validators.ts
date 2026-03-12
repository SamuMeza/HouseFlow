// src/utils/validators.ts

export const isValidPropertyUrl = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url);
        const forbiddenDomains = ['facebook.com', 'instagram.com', 'twitter.com', 'tiktok.com', 'google.com'];

        // 1. Verificar protocolo
        if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') return false;

        // 2. Verificar que no sea una red social
        const isForbidden = forbiddenDomains.some(domain => parsedUrl.hostname.includes(domain));

        return !isForbidden;
    } catch (e) {
        return false; // No es una URL válida
    }
};
