"use strict";
/**
 * Implemente un programa que muestre por pantalla los nombre de los archivos almacenados en un directorio en concreto.
 * Muestre por pantalla el contenido de todos los archivos almacenados en el mismo. Por cada fichero, muestre también el número de lineas, palabras y caracteres.
 * Muestre por pantalla aquel fichero que contiene más caracteres.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Crear un fichero o escribir sobre 
const fs_1 = require("fs");
const fs_2 = require("fs");
//Parametros que recibe
//1. crear un fichero y escibir sobre el
//2. el contenido del fichero
//3. despues de crear el fichero, el mensaje
fs_1.writeFile('helloworld.txt', 'Hello World!', () => {
    console.log('File helloworld.txt has just been created');
});
//Parametros que recibe
//1. ruta del fichero que queire leer
//2. un manejador con dos parametros - 1. De momento, obviamos el primer parámetro marcándolo con un _ al principio de la definición de la arrow function.
//2.2 buffer donde guarda todos los contenidos del fichero
//Contenidos -> letras usa data.toString()
fs_2.readFile('helloworld.txt', (_, data) => {
    console.log(data);
});
//Si el fichero no existe? --> usa manejador o callback
