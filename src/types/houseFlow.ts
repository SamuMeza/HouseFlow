// src/types/houseFlow.ts

export interface HouseFlowProject {
  id: string;
  originalUrl: string;
  createdAt: string;
  propertyInfo: {
    title: string;
    price: {
      amount: number | null;
      currency: string;
      formatted: string;
    };
    location: string;
    specs: {
      bedrooms: number | null;
      bathrooms: number | null;
      area: string | null;
      parking: number | null;
    };
    amenities: string[];
  };
  marketingKit: {
    instagram: {
      hook: string;
      body: string;
      tags: string[];
    };
    whatsapp: {
      message: string;
    };
    videoScript: {
      scenes: Array<{
        step: number;
        instruction: string;
        dialogue: string;
      }>;
    };
  };
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export interface CardProps {
  children: React.ReactNode; //Esto quiere decir que puede recibir cualquier tipo de contenido dentro de la tarjeta
  className?: string;
}

export interface BadgeProps {
  label: string;
  icon?: React.ReactNode; // El icono es opcional
  variant?: 'solid' | 'outline' | 'ghost'; // Por si queremos varios estilos
  className?: string;
}
