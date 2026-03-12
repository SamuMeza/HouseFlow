import { useState } from "react"
import { isValidPropertyUrl } from "../../utils/validators";
import Button from "../atoms/Button"
import Input from "../atoms/Input"
import { Send } from "lucide-react"

const UrlForm = () => {
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
        }, 2000);
    }

    return (
        <>
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