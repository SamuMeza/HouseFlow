import { Copyright } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p><Copyright size={20} /> {new Date().getFullYear()} HouseFlow. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer