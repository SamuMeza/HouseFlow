import type { InputProps } from "../../types/houseFlow";

const Input = ({ className = "", ...attributes }: InputProps) => {
    return (
        <input className={`input-premium ${className}`} {...attributes} />
    )
}

export default Input