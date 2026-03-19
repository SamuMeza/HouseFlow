import { useEffect } from "react";
import TeleprompterDisplay from "../components/organisms/TeleprompterDisplay";
import type { HouseFlowProject } from "../types/houseFlow";
import { useNavigate } from "react-router-dom";

const Teleprompter = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("currentProject")) navigate("/");
    }, [navigate]);

    const savedData = localStorage.getItem("currentProject");
    const project: HouseFlowProject | null = savedData ? JSON.parse(savedData) : null;
    const script = project?.marketingKit?.videoScript.scenes.map(scene => scene.dialogue).join("\n\n");


    return (
        <section className="teleprompter-page">
            <div className="container">
                <header className="teleprompter-header">
                    <h1>Teleprompter</h1>
                    <p>Lee tu guion profesionalmente mientras grabas.</p>
                </header>
                <TeleprompterDisplay text={script || "No hay guion disponible"} />
            </div>
        </section>
    )
}

export default Teleprompter