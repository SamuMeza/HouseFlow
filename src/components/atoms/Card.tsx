import type { CardProps } from "../../types/houseFlow";

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`card-premium ${className}`.trim()}>
            {children}
        </div>
    );
};

export default Card;