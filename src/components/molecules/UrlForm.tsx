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
    const [error, setError] = useState<string | null>(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!isValidPropertyUrl(url)) {
            setError("Por favor, ingresa una URL válida de una inmobiliaria.");
            return;
        }

        setIsAnalyzing(true);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error("Hubo un problema al procesar la propiedad. Inténtalo de nuevo.");
            }

            const data = await response.json();

            const pesentHistory = JSON.parse(localStorage.getItem("houseflow_history") || "[]");

            const updatedHistory = [data, ...pesentHistory];

            localStorage.setItem("houseflow_history", JSON.stringify(updatedHistory));
            localStorage.setItem("currentProject", JSON.stringify(data));

            navigate("/dashboard");

        } catch (error: any) {
            setError(error.message || "Error desconocido al procesar la propiedad.");
        } finally {
            setIsAnalyzing(false);
        }
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
                    onChange={(e) => { setUrl(e.target.value); setError(null) }}
                    disabled={isAnalyzing}
                />
                <Button
                    type="submit"
                    label={isAnalyzing ? "Analizando..." : <><Send /> Analizar</>}
                    variant="primary"
                    disabled={isAnalyzing} />

                {error && <p className="error-message">{error}</p>}
            </form>

        </>
    )
}

export default UrlForm