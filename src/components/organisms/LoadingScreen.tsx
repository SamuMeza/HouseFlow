import { motion } from "framer-motion"
import { infiniteRotate, fadeAnimation } from "../../utils/animations"
import { Loader2 } from "lucide-react"

const LoadingScreen = () => {
    return (
        <motion.div className="loading-overlay" {...fadeAnimation}>
            <div className="loading-content">
                <motion.div {...infiniteRotate}>
                    <Loader2 size={48} className="loader-icon" />
                </motion.div>
                <h2>Escaneando propiedad...</h2>
                <p>Nuestra IA está analizando los detalles para tu kit de marketing.</p>
            </div>
        </motion.div>
    )
}

export default LoadingScreen