import { ChevronUp, ChevronDown, Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Button from "../atoms/Button"
import Card from "../atoms/Card"
import type { TeleprompterConfig } from "../../types/houseFlow"

const TeleprompterDisplay = ({ text }: { text: string }) => {
    // Configuración central del teleprompter: velocidad, tamaño de fuente y estado de reproducción
    const [config, setConfig] = useState<TeleprompterConfig>({
        speed: 2, // Cantidad de píxeles que se desplazan por cada ciclo
        fontSize: 2.5, // Tamaño en rem para facilitar la lectura a distancia
        isPlaying: false, // Control maestro del movimiento
    });

    // Referencia directa al elemento del DOM que contiene el texto.
    // Lo usamos para manipular el 'scrollTop' sin provocar re-renders de React,
    // logrando un movimiento fluido de 60fps (aprox).
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: ReturnType<typeof requestAnimationFrame>;

        // EL MOTOR: Si el estado es 'reproduciendo' y tenemos acceso al elemento (ref)...
        const loop = () => {
            if (config.isPlaying && scrollRef.current) {
                // Movemos el scroll
                // Usamos una velocidad menor porque rAF se ejecuta mucho más rápido 
                scrollRef.current.scrollTop += (config.speed * 0.5);

                animationFrameId = requestAnimationFrame(loop);
            }
        };

        if (config.isPlaying) {
            animationFrameId = requestAnimationFrame(loop);
        }
        // LIMPIEZA: Al desmontar el componente o cambiar la configuración, 
        // cancelamos el frame anterior para evitar fugas de memoria (memory leaks).
        return () => cancelAnimationFrame(animationFrameId);
    }, [config.isPlaying, config.speed]);

    // Reinicia el texto al principio y detiene el movimiento
const handleReset = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
    }
    setConfig({ ...config, isPlaying: false });
};

return (
    <article className="teleprompter-logic">
        <nav className="tele-toolbar mb-4" aria-label="Controles del teleprompter">
            <fieldset className="control-fieldset">
                <legend className="sr-only">Ajustes de Velocidad</legend>
                <span className="text-muted">Velocidad</span>
                <div className="stepper-control">
                    <button
                        className="icon-btn"
                        onClick={() => setConfig({ ...config, speed: Math.max(1, config.speed - 1) })}
                        aria-label="Disminuir velocidad"
                    >
                        <ChevronDown size={20} />
                    </button>
                    <output className="control-value">{config.speed}</output>
                    <button
                        className="icon-btn"
                        onClick={() => setConfig({ ...config, speed: config.speed + 1 })}
                        aria-label="Aumentar velocidad"
                    >
                        <ChevronUp size={20} />
                    </button>
                </div>
            </fieldset>

            <div className="action-group">
                <Button
                    className="w-full"
                    label={config.isPlaying ? <><Pause size={18} /> Detener</> : <><Play size={18} /> Iniciar</>}
                    variant={config.isPlaying ? "secondary" : "primary"}
                    onClick={() => setConfig({ ...config, isPlaying: !config.isPlaying })}
                />
                <Button
                    label={<RotateCcw size={18} />}
                    variant="secondary"
                    className="btn-reset"
                    onClick={handleReset}
                    aria-label="Reiniciar texto"
                />
            </div>
        </nav>
        <Card className="tele-view-container">
            <div className="focus-overlay" aria-hidden="true"></div>
            <section
                ref={scrollRef}
                className="tele-content-scroll"
                style={{ fontSize: `${config.fontSize}rem` }}
                aria-label="Texto para leer"
            >
                <div className="spacer-top" aria-hidden="true"></div>
                <p className="tele-text">{text}</p>
                <div className="spacer-bottom" aria-hidden="true"></div>
            </section>
        </Card>
    </article>
)
}

export default TeleprompterDisplay