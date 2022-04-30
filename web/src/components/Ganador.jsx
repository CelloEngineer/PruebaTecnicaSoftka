import { useNavigate } from "react-router-dom";

function Ganador () {
    const navigate = useNavigate();
    const puntos = parseInt(localStorage.getItem('puntos')) + 100000;
    localStorage.removeItem('puntos');
    return ( 
        <div className="header">
            <h1 className="header__inicio contenedor">Fin del juego.</h1>
            <h2 className="header__texto contenedor padding">Dinero Ganado: ${puntos} pesos</h2>
            <button className="button button__restart contenedor" onClick={() => navigate('/')}>Volver a Jugar</button>
        </div>
    );
}

export default Ganador;