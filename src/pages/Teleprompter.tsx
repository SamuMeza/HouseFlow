import TeleprompterDisplay from "../components/organisms/TeleprompterDisplay";

const Teleprompter = () => {
    const guionEjemplo = "¡Hola a todos! Bienvenidos a esta espectacular villa en Marbella. Como pueden ver, el salón es amplísimo y tiene unas vistas al mar que quitan el aliento. Esta propiedad cuenta con 4 habitaciones, acabados de mármol y una piscina infinita. Es la oportunidad perfecta para invertir en la Costa del Sol. ¡Acompáñenme a ver el resto!"
    return (
        <section className="teleprompter-page">
            <div className="container">
                <header className="teleprompter-header">
                    <h1>Teleprompter</h1>
                    <p>Lee tu guion profesionalmente mientras grabas.</p>
                </header>
                <TeleprompterDisplay text={guionEjemplo} />
            </div>
        </section>
    )
}

export default Teleprompter