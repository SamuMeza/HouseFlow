import { Copyright } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p><Copyright size={20} /> {new Date().getFullYear()} HouseFlow. Todos los derechos reservados.</p>
                <p>Creado por <a href="https://github.com/SamuMeza" target="_blank" rel="noopener noreferrer">Samuel Meza</a></p>
            </div>
        </footer>
    )
}

export default Footer