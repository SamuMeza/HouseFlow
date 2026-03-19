import Card from "../components/atoms/Card";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import { useState, useEffect } from "react";
import { Bed, Bath, Maximize2, MapPin, Video, MessageCircle, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations"
import type { HouseFlowProject } from "../types/houseFlow";

const Dashboard = () => {
    const [project, setProject] = useState<HouseFlowProject | null>(null);
    const [activeTab, setActiveTab] = useState<"instagram" | "whatsapp" | "videoScript">("instagram");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem("currentProject");
        if (savedData) {
            setProject(JSON.parse(savedData) as HouseFlowProject);
        }
    }, []);

    const getMarketingText = () => {
        if (!project) return;

        const kit = project.marketingKit

        switch (activeTab) {
            case "instagram":
                return `${kit.instagram.hook}\n\n${kit.instagram.body}\n\n${kit.instagram.tags.join(" ")}`;
            case "whatsapp":
                return kit.whatsapp.message;
            case "videoScript":
                return kit.videoScript.scenes.map(scene => `${scene.step}\n\n${scene.instruction}\nDiálogo: ${scene.dialogue}`).join("\n\n");
            default:
                return "";
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(getMarketingText() || "");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Error al copiar:", error);
        }
    }

    if (!project) {
        return (
            <section className="dashboard-page">
                <div className="container">
                    <header className="dashboard-header">
                        <h1>Tu proyecto Generado</h1>
                        <p>Aquí tienes todo el material de marketing para tu propiedad.</p>
                    </header>
                </div>
            </section>
        )
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
                                <img src={project.mainImage} alt="Propiedad" />
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
                                <Button label="Ver Origen" variant="secondary" onClick={() => { window.open(project.originalUrl, "_blank") }} />
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
                                <button className={`tab-btn ${activeTab === "videoScript" ? "active" : ""}`} onClick={() => setActiveTab("videoScript")}>
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
                                    <h3 className="mb-2 text-accent">Contenido para {activeTab}</h3>
                                    <p className="ai-text-output">{getMarketingText()}</p>
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

export default Dashboard