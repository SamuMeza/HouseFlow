import type { ButtonProps } from "../../types/houseFlow";

const Button = ({ label, variant = "primary", className = "", ...attributes }: ButtonProps) => {
    return (
        <button className={`btn btn-${variant} ${className}`} {...attributes}>
            {label}
        </button>
    )
}

export default Button