import { useNavigate } from "react-router-dom";

function Ganador () {
    const navigate = useNavigate();
    const puntos = parseInt(localStorage.getItem('puntos')) + 100000;
    localStorage.removeItem('puntos');
    return ( 
        <div>
            <h1>Dinero Ganado: ${puntos} pesos</h1>
            <button onClick={() => navigate('/')}>Volver a Jugar</button>
        </div>
    );
}

export default Ganador;