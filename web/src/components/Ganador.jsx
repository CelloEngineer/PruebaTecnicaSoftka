function Ganador () {
    const puntos = parseInt(localStorage.getItem('puntos')) + 100000;
    localStorage.removeItem('puntos');
    return ( 
        <div>
            <h1>Dinero Ganado: ${puntos} pesos</h1>
        </div>
    );
}

export default Ganador;