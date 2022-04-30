import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Ganador from "./Ganador"

function Inicio () {
    const navigate = useNavigate();
    const [contador, setContador] = useState(0);
    const [niveles, setNiveles] = useState([1,2,3,4,5]);
    const [puntos, setPuntos] = useState(0);

    var preguntasNivel1 = [{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el país con más habitantes del mundo?",
        a: "China",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b"
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    }]

    var preguntasNivel2 = [{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el país con más habitantes del mundo?",
        a: "China",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    },{
        pregunta: "¿Cuál es el río más largo del mundo?",
        a: "El río Amarillo",
        b: "El Amazonas",
        c: "El Nilo",
        d: "El Éufrates",
        correcta: "b",
    }]

    const preguntaAleatoria = (preguntasNivel) => {
        let indiceAleatorio = Math.floor(Math.random() * (preguntasNivel.length - 1));
        return preguntasNivel[indiceAleatorio];
    }

    const onClick = (event, preguntaAleatoria) => {
        event.preventDefault();
        if(event.target.name === preguntaAleatoria.correcta && contador === 1){
            setPuntos(puntos + 100000);
            Swal.fire(
                '¡Correcto!',
                `Has respondido correctamente a todas las preguntas, eres un genio! :)`,
                'success'
            )
            localStorage.setItem("puntos", puntos);
            setContador(0);
            setPuntos(0);
            navigate("/ganador");
        }else if(event.target.name === preguntaAleatoria.correcta && contador < 1){
            setContador(contador + 1);
            setPuntos(puntos + 100000);
            Swal.fire(
                '¡Correcto!',
                'Has respondido correctamente a esta pregunta, preparate para la siguiente :)',
                'success'
            )
        }else{
            setContador(0);
            setPuntos(0);
            Swal.fire(
                '¡Has Fallado!',
                'Respondiste incorrectamente a esta pregunta, fin del juego :(',
                'error'
            )
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
                Swal.fire(
                    'Juego Terminado',
                    `Te haz retirado del juego en la ronda ${niveles[contador]} y te vas para casa Sofka con $${puntos} pesos`,
                    'info'
                )
                setPuntos(0);
                setContador(0);
            }
          })
    }

    const ronda = (niveles, contador) => {

        let preguntas = [];
        if (niveles[contador] === 1) {
            preguntas = preguntasNivel1;
        }else if (niveles[contador] === 2) {
            preguntas = preguntasNivel2;
        }/**else if (niveles[contador] === 3) {
            preguntas = preguntasNivel3;
        }else if (niveles[contador] === 4) {
            preguntas = preguntasNivel4;
        }else if (niveles[contador] === 5) {
            preguntas = preguntasNivel5;
        }**/

        return (
            <div>
                <h1>Ronda {niveles[contador]} del juego</h1>
                <h3>Pregunta: &nbsp;
                    {preguntaAleatoria(preguntas).pregunta}
                </h3> 
                <h4>Opciones: </h4>
                <button name="a" onClick={(e) => onClick(e, preguntaAleatoria(preguntas))}>{preguntaAleatoria(preguntas).a}</button>
                <button name="b" onClick={(e) => onClick(e, preguntaAleatoria(preguntas))}>{preguntaAleatoria(preguntas).b}</button>
                <button name="c" onClick={(e) => onClick(e, preguntaAleatoria(preguntas))}>{preguntaAleatoria(preguntas).c}</button>
                <button name="d" onClick={(e) => onClick(e, preguntaAleatoria(preguntas))}>{preguntaAleatoria(preguntas).d}</button>
                <button onClick={retiro}>Deseo retirarme</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Inicio</h1>
            <h2>Juguemos a quien quiere ser millonario</h2>
            {ronda(niveles, contador)}
            <h3>Dinero obtenido: ${puntos} pesos!</h3>
        </div>
    );
}

export default Inicio;