import Button from "../atoms/Button";
import { useState } from "react";

const ThanksModal = ({ closeModal }: { closeModal: () => void }) => {
    const [showBinance, setShowBinance] = useState(false);

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content glassmorphism" onClick={(e) => e.stopPropagation()}>
                {!showBinance ? (
                    <>
                        <h2>¡Hola de parte del creador! 👋</h2>
                        <p>HouseFlow es una herramienta que está dando sus primeros pasos.
                            Si esta pequeña herramienta te está ahorrando tiempo de alguna manera,
                            ¡me encantaría saberlo!</p>
                        <p>Tus recomendaciones son mi mejor combustible.
                            Y si quieres apoyar de alguna forma esta herramienta para que siga creciendo,
                            puedes ayudarme con una donación, por mas pequeña que sea, sera bienvenida.</p>

                        <div className="modal-footer">
                            <Button label="¡Buena suerte!" onClick={closeModal} />
                            <Button label="Apoyar con Binance 😁" variant="secondary" onClick={() => setShowBinance(true)} />
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-accent">Donar con Binance Pay</h2>
                        <p>¡Muchas gracias por el apoyo! Puedes usar mi Pay ID directamente desde tu billetera Binance:</p>

                        <div className="binance-pay-id" onClick={() => {
                            navigator.clipboard.writeText("11123213123");
                            alert("Pay ID copiado al portapapeles");
                        }}>
                            <span className="pay-id-label">Binance Pay ID (Click para copiar)</span>
                            <code className="pay-id-number">11123213123</code>
                        </div>

                        <p className="text-muted mt-4">O si lo prefieres, escanea el código QR:</p>
                        <div className="qr-container">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TU_ID_AQUI" alt="QR Binance Pay" className="qr-img" />
                        </div>

                        <div className="modal-footer mt-6">
                            <Button label="Atrás" variant="secondary" onClick={() => setShowBinance(false)} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ThanksModal;