import { Link } from "react-router-dom"
import { House } from "lucide-react"
import Button from "../atoms/Button"
import { Sparkles } from "lucide-react"
import ThanksModal from "../molecules/ThanksModal";
import { useState } from "react";

const Navbar = () => {
    const [showThanksModal, setShowThanksModal] = useState(false);

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
                        label={<><Sparkles size={20} />Donar</>}
                        className="btn-pro"
                        onClick={() => setShowThanksModal(true)}
                    />
                </div>
            </div>
            {showThanksModal && <ThanksModal closeModal={() => setShowThanksModal(false)} />}
        </header>
    )
}

export default Navbar