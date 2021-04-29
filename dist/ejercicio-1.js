"use strict";
const directory = './home/usuario/practica09/ficheros';
const fs = require('fs');
fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
