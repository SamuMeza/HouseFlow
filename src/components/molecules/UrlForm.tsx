import { useState } from "react"
import { isValidPropertyUrl } from "../../utils/validators";
import { useNavigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Button from "../atoms/Button"
import Input from "../atoms/Input"
import LoadingScreen from "../organisms/LoadingScreen";
import { Send } from "lucide-react"

const UrlForm = () => {
    const navigate = useNavigate()
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidPropertyUrl(url)) {
            setError("Por favor, ingresa una URL válida.");
            return;
        }

        // Lógica Futura: llamar a la API
        setIsAnalyzing(true)
        console.log("Analizando URL:", url);

        setTimeout(() => {
            setIsAnalyzing(false)
            navigate("/dashboard")
        }, 2000);
    }

    return (
        <>
            <AnimatePresence>
                {isAnalyzing && <LoadingScreen />}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="url-form">
                <Input
                    type="url"
                    placeholder="Ingresa la URL de la propiedad"
                    required
                    value={url}
                    onChange={(e) => { setUrl(e.target.value); setError("") }}
                    disabled={isAnalyzing}
                />
                <Button
                    type="submit"
                    label={isAnalyzing ? "Analizando..." : <><Send /> Analizar</>}
                    variant="primary"
                    disabled={isAnalyzing} />
            </form>

            {error && <p className="error-message">{error}</p>}
        </>
    )
}

export default UrlForm