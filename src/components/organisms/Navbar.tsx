import { Link } from "react-router-dom"
import { House } from "lucide-react"
import Button from "../atoms/Button"
import { Sparkles } from "lucide-react"

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="nav-logo"><House size={20} />HouseFlow</Link>
                <nav className="main-nav">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/history">Historial</Link>
                        </li>
                        <li>
                            <Link to="/teleprompter" className="nav-link-special">Teleprompter</Link>
                        </li>
                    </ul>
                </nav>
                <div className="nav-actions">
                    <Button
                        type="button"
                        variant="secondary"
                        label={<><Sparkles size={20} /> Pro Access</>}
                        className="btn-pro"
                    />
                </div>
            </div>
        </header>
    )
}

export default Navbar