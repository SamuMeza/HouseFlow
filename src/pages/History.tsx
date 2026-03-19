import { motion } from "framer-motion"
import { Bed, Bath, Play, LayoutDashboard, MapPin, Building2 } from "lucide-react";
import Card from "../components/atoms/Card";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import { fadeInUp, staggerContainer } from "../utils/animations";
import type { HouseFlowProject } from "../types/houseFlow";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<HouseFlowProject[]>([]);
    const [freeUsesUsed, setFreeUsesUsed] = useState(0);
    const maxFreeUses = 2;

    useEffect(() => {
        const savedHistory = localStorage.getItem("houseflow_history")

        if (savedHistory) {
            setProjects(JSON.parse(savedHistory));
            setFreeUsesUsed(JSON.parse(savedHistory).length);
        }
    }, []);

    const handleViewProject = (project: HouseFlowProject, target: string) => {
        localStorage.setItem("currentProject", JSON.stringify(project));
        navigate(target);
    }

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
                    {projects.map((project: HouseFlowProject) => (
                        <motion.article key={project.id} variants={fadeInUp}>
                            <Card className="history-card-item">

                                <figure className="property-figure">
                                    <Badge label={new Date(project.createdAt).toLocaleDateString()} variant="solid" className="badge-date" />
                                    <img
                                        src={project.mainImage}
                                        alt={`Vista previa de: ${project.propertyInfo.title}`}
                                        className="property-img"
                                    />
                                    <figcaption className="sr-only">{project.propertyInfo.title}</figcaption>
                                </figure>

                                <div className="property-details">
                                    <header>
                                        <h2 className="property-title">{project.propertyInfo.title}</h2>
                                        <p className="property-location">
                                            <MapPin size={12} /> {project.propertyInfo.location}
                                        </p>
                                    </header>

                                    <div className="specs-row" aria-label="Características">
                                        <Badge icon={<Bed size={12} />} label={`${project.propertyInfo.specs.bedrooms} Hab`} variant="outline" className="badge" />
                                        <Badge icon={<Bath size={12} />} label={`${project.propertyInfo.specs.bathrooms} Baños`} variant="outline" className="badge" />
                                    </div>

                                    <nav className="actions-group" aria-label={`Acciones para ${project.propertyInfo.title}`}>
                                        <Button
                                            label={<><LayoutDashboard size={14} /> Ver Kit</>}
                                            variant="secondary"
                                            onClick={() => handleViewProject(project, "/dashboard")}
                                        />
                                        <Button
                                            label={<><Play size={14} /> Grabar</>}
                                            variant="primary"
                                            onClick={() => handleViewProject(project, "/teleprompter")}
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