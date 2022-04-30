# PruebaTecnicaSoftka
Prueba técnica para reto Sofka

# Comprobar que Node.js está instalado. Si no es así, instalarlo
[Intrucciones para descargar acá:](https://nodejs.org/es/download/)

# Descargar el código fuente del proyecto

# Abrir una terminal en la carpeta en donde se descargó el código fuente. 

# Ejecutar `npm run start`. 

# La aplicación abrirá en `localhost`. 

# Cómo agregar preguntas:

Para agregar preguntas, editar el archivo `utils/niveles.js`. Cada pregunta es un objeto con una propiedad `pregunta` y otra propiedad `respuestas`, que es una lista de respuestas. Cada respuesta es un objeto con una propiedad `respuesta_text` en donde se guarda el string de la respuesta y otra propiedad `es_correcta` que guarda un booleano indicando si la pregunta es correcta o no.

Para agregar una pregunta, hay que crear un nuevo objeto similar a las otras preguntas. **Debe** tener 4 respuestas, y de esas sólo una puede tener un valor de `es_correcta` como verdadero.  
