import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "../utils/animations"
import UrlForm from "../components/molecules/UrlForm"
import { Camera, MessageCircleMore, Video } from "lucide-react"

const Home = () => {
    return (
        <motion.section
            className="home-hero"
            initial="initial"
            animate="animate"
            variants={staggerContainer}>

            <div className="container">
                <motion.h1 className="hero-title" variants={fadeInUp}>Tus propiedades, <br />
                    <span>en piloto automático</span>
                </motion.h1>

                <motion.p className="hero-subtitle" variants={fadeInUp}>
                    Pega el enlace de cualquier inmobiliaria y genera un kit de marketing
                    profesional en segundos usando IA.
                </motion.p>

                <motion.div variants={fadeInUp}>
                    <UrlForm />
                </motion.div>

                <motion.div className="hero-badges" variants={fadeInUp}>
                    <span><Camera size={16} />Instagram</span>
                    <span><MessageCircleMore size={16} />WhatsApp</span>
                    <span><Video size={16} />Video Script</span>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Home