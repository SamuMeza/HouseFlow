import Card from "../components/atoms/Card";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import { useState } from "react";
import { Bed, Bath, Maximize2, MapPin, Video, MessageCircle, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<"instagram" | "whatsapp" | "tiktok">("instagram");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(AI_RESULTS[activeTab].content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Error al copiar:", error);
        }
    }

    return (
        <section className="dashboard-page">
            <div className="container">
                <header className="dashboard-header">
                    <h1>Tu proyecto Generado</h1>
                    <p>Aquí tienes todo el material de marketing para tu propiedad.</p>
                </header>
                <div className="dashboard-grid">
                    <aside className="dashboard-sidebar">
                        <Card className="property-card">
                            <div className="property-img-container">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Propiedad" />
                            </div>
                            <div className="property-info">
                                <Badge label="En Venta" variant="solid" className="mb-2" />
                                <h2 className="property-title">Villa Moderna con Vistas al Mar</h2>
                                <p className="property-location"><MapPin size={14} />Marbella, España</p>
                                <p className="property-price">1.250.000 €</p>
                                <div className="property-stats">
                                    <Badge icon={<Bed size={14} />} label="4 Habitaciones" variant="outline" />
                                    <Badge icon={<Bath size={14} />} label="3 Baños" variant="outline" />
                                    <Badge icon={<Maximize2 size={14} />} label="200 m²" variant="outline" className="w-full mt-4" />
                                </div>
                                <Button label="Ver Origen" variant="secondary" onClick={() => { window.open("#", "_blank") }} />
                            </div>
                        </Card>
                    </aside>
                    <main className="dashboard-main">
                        <Card className="ai-results-card">
                            <div className="tabs-header">
                                <button className={`tab-btn ${activeTab === "instagram" ? "active" : ""}`} onClick={() => setActiveTab("instagram")}>
                                    <Camera size={18} />
                                    Instagram
                                </button>
                                <button className={`tab-btn ${activeTab === "whatsapp" ? "active" : ""}`} onClick={() => setActiveTab("whatsapp")}>
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </button>
                                <button className={`tab-btn ${activeTab === "tiktok" ? "active" : ""}`} onClick={() => setActiveTab("tiktok")}>
                                    <Video size={18} />
                                    VideoScript
                                </button>
                            </div>
                            <div className="tabs-content">
                                <motion.div className="content-scroll"
                                    key={activeTab}
                                    initial="initial"
                                    animate="animate"
                                    variants={fadeInUp}
                                >
                                    <h3 className="mb-2 text-accent">{AI_RESULTS[activeTab].title}</h3>
                                    <p className="ai-text-output">{AI_RESULTS[activeTab].content}</p>
                                </motion.div>

                                <footer className="tab-footer mt-4">
                                    <Button className="w-full" label={copied ? "¡Copiado al portapapeles!" : "Copiar Texto"} variant="primary" onClick={handleCopy} />
                                </footer>
                            </div>
                        </Card>
                    </main>
                </div>
            </div>
        </section>
    )
}

const AI_RESULTS = {
    instagram: {
        title: "Copy para Instagram",
        content: "✨ ¡Increíble oportunidad en Marbella! Esta villa moderna redefine el lujo costa. Con 4 amplias habitaciones y vistas al mar, es el hogar de tus sueños. #Inmobiliaria #Lujo #MarbellaVillas",
    },
    tiktok: {
        title: "Guion para Video",
        content: "[Escena 1: Fachada con música movida] ¿Buscas vivir frente al mar? Te presento la Villa Z. [Escena 2: Interior] Espacios abiertos, luz natural y acabados de mármol...",
    },
    whatsapp: {
        title: "Mensaje de WhatsApp",
        content: "Hola! Te comparto la ficha de esta propiedad en Marbella: Villa Moderna, 4 hab, 1.25M €. Avísame si quieres agendar una visita.",
    }
};


export default Dashboard