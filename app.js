const fs = require('fs');
const peliculas = require('./peliculas.js');

function mostrarPelicula(pelicula) {
    console.log('--------------------');
    console.log(`Película: ${pelicula.title}`);
    console.log(`Calificación: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('--------------------');
};

function idDePelicula(id) {
    const peliculaEncontrada = peliculas.find(pelicula => pelicula.id === id);
    if (peliculaEncontrada) {
        mostrarPelicula(peliculaEncontrada);
    } else {
        console.log("Película no encontrada.");
    }
}

const mensaje = fs.readFileSync('./mensaje.txt', 'utf8');
console.log(mensaje);

idDePelicula(1);