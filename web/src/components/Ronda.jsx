import React, {useState, useEffect} from 'react'

function Ronda({nivelActual, handleClick, retiro}) {
    const seleccionarPreguntaAleatoria = () => {
        let indiceAleatorio = Math.floor(Math.random() * (nivelActual.preguntas_nivel.length - 1));

        return nivelActual.preguntas_nivel[indiceAleatorio]
        }
    
    const [preguntaActual, setPreguntaActual] = useState(() => seleccionarPreguntaAleatoria())
    
    
    useEffect(() => {
        setPreguntaActual(seleccionarPreguntaAleatoria())
    }, [nivelActual])
    
    return (
            <div className="body">
                <h1>Ronda {nivelActual.nivel} del juego</h1>
                <h3>Pregunta: &nbsp;
                    {preguntaActual.pregunta}
                </h3> 
                <h4>Opciones: </h4>
                <div className='contenedor-botones'>
                    {
                        preguntaActual.respuestas.map((respuesta) => (
                            <button 
                                className="button" 
                                name={respuesta.respuesta_texto}
                                onClick={(e) => handleClick(e, respuesta.es_correcta)}>
                                    {respuesta.respuesta_texto}
                            </button>
                        ))
                    }
                </div>
                <button className="button button__retirarse" onClick={(e) => retiro(e)}>Deseo retirarme</button>
            </div>
        ) /** dos div**/
    }

export default Ronda