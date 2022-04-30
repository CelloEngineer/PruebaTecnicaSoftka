import React, { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import Ronda from "./Ronda"

// Lista de preguntas
import lista_niveles from "../utils/niveles";

function Inicio () {
    // Estado de la aplicación

    const [contador, setContador] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [nivelActualIndice, setnivelActualIndice] = useState(0)
    
    const navigate = useNavigate();
    
    // Manejar interacción del usuario
    const handleClick = (e, esCorrecta) => {
        e.preventDefault();

        if (esCorrecta) {
            setPuntos((prevPuntos) => prevPuntos + 100000)
            
            if (nivelActualIndice < 4) {
                // Respuesta correcta, pero el juego no ha terminado
                setnivelActualIndice((prevnivelActualIndice) => prevnivelActualIndice + 1)

                Swal.fire(
                    '¡Correcto!',
                    'Has respondido correctamente a esta pregunta, preparate para la siguiente :)',
                    'success'
                )
            }
            else {
                // Respuesta correcta y el juego ya terminó
                Swal.fire(
                    '¡Correcto!',
                    `Has respondido correctamente a todas las preguntas, eres un genio! :)`,
                    'success'
                )
                localStorage.setItem("puntos", puntos);
                navigate("/ganador");
            }

        } else {
            // Respuesta incorrecta reinicia el juego
            
            Swal.fire({ 
                title: '¡Has Fallado!',
                text: 'Respondiste incorrectamente a esta pregunta, fin del juego :(',
                icon: 'error',
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    setPuntos(0)
                    window.location.reload()
                }
            })
        }
    }

    const retiro = (event) => {
        event.preventDefault();
        Swal.fire({
            title: '¿Estás seguro de que deseas retirarte?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'No, quiero seguir jugando',
            denyButtonText: `Sí, estoy seguro`,
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Esa es la actitud!',
                    'Vamos con toda :)',
                    'success'
                )
            } else if (result.isDenied) {
                Swal.fire({
                    title: "You are a pussy",
                    text: `Te haz retirado del juego en la ronda ${nivelActualIndice + 1} y te vas para casa Sofka con $${puntos} pesos`,
                    confirmButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        setPuntos(0);
                        setContador(0);
                        window.location.reload()
                    }
                })
            }
          })
    }

    return (
        <div>
            <header className="header">
                <div className="contenedor">
                    <h1 className="header__inicio">Inicio</h1>
                    <h2 className="header__texto">Juguemos a quien quiere ser millonario</h2>
                </div>
            </header>
            <Ronda nivelActual={lista_niveles[nivelActualIndice]}
                handleClick={handleClick}
                retiro={retiro} />

            <h3>Dinero obtenido: ${puntos} pesos!</h3>
        </div>
    );
}

export default Inicio;