import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "../utils/animations"
import UrlForm from "../components/molecules/UrlForm"

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
                    <span>Instagram</span>
                    <span>WhatsApp</span>
                    <span>Video Script</span>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Home