import type { BadgeProps } from "../../types/houseFlow";

const Badge = ({ label, icon, variant = 'solid', className }: BadgeProps) => {
    return (
        <span className={`badge badge-${variant} ${className}`.trim()}>
            {icon && <span className="badge-icon">{icon}</span>}
            {label}
        </span>
    )
}

export default Badge