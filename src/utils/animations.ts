// src/utils/animations.ts

//as const es para que el objeto sea inmutable

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
} as const;

export const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Esto hace que los hijos aparezcan uno tras otro
        }
    }
} as const;

export const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
} as const;

export const infiniteRotate = {
    animate: { rotate: 360 },
    transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear"
    }
} as const;
