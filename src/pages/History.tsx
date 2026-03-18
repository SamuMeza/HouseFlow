import { motion } from "framer-motion"
import { Bed, Bath, Play, LayoutDashboard, MapPin, Building2 } from "lucide-react";
import Card from "../components/atoms/Card";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import { fadeInUp, staggerContainer } from "../utils/animations";

import "../assets/History.css"; // Estilo propio de Historial

const MOCK_PROJECTS = [
    {
        id: "proj-01",
        title: "Villa Moderna con Vistas al Mar",
        location: "Marbella, Andalucía",
        date: "Hoy, 10:30 AM",
        specs: { beds: 4, baths: 3 },
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "proj-02",
        title: "Ático Luminoso Centro Histórico",
        location: "Madrid, Centro",
        date: "Ayer, 16:45 PM",
        specs: { beds: 2, baths: 2 },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
    }
];

const History = () => {

    const freeUsesUsed = MOCK_PROJECTS.length;
    const maxFreeUses = 2;

    return (
        <main className="history-page">
            <section className="container">
                <motion.header
                    className="history-header"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    <div className="header-info">
                        <h1>Tus Proyectos</h1>
                        <p className="text-muted">Revisa y gestiona el material de marketing generado.</p>
                    </div>

                    <aside className="freemium-status" aria-label="Estado de uso">
                        <Building2 size={18} className="text-accent" />
                        <span>Créditos Gratis: <strong>{freeUsesUsed} de {maxFreeUses}</strong></span>
                    </aside>
                </motion.header>

                <motion.div
                    className="history-grid"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    role="feed"
                >
                    {MOCK_PROJECTS.map((project) => (
                        <motion.article key={project.id} variants={fadeInUp}>
                            <Card className="history-card-item">

                                <figure className="property-figure">
                                    <Badge label={project.date} variant="solid" className="badge-date" />
                                    <img
                                        src={project.image}
                                        alt={`Vista previa de: ${project.title}`}
                                        className="property-img"
                                    />
                                    <figcaption className="sr-only">{project.title}</figcaption>
                                </figure>

                                <div className="property-details">
                                    <header>
                                        <h2 className="property-title">{project.title}</h2>
                                        <p className="property-location">
                                            <MapPin size={12} /> {project.location}
                                        </p>
                                    </header>

                                    <div className="specs-row" aria-label="Características">
                                        <Badge icon={<Bed size={12} />} label={`${project.specs.beds} Hab`} variant="outline" className="badge" />
                                        <Badge icon={<Bath size={12} />} label={`${project.specs.baths} Baños`} variant="outline" className="badge" />
                                    </div>

                                    <nav className="actions-group" aria-label={`Acciones para ${project.title}`}>
                                        <Button
                                            label={<><LayoutDashboard size={14} /> Ver Kit</>}
                                            variant="secondary"
                                        />
                                        <Button
                                            label={<><Play size={14} /> Grabar</>}
                                            variant="primary"
                                        />
                                    </nav>
                                </div>

                            </Card>
                        </motion.article>
                    ))}
                </motion.div>
            </section>
        </main>
    )
}

export default History