const directory = './home/usuario/practica09/ficheros';
const fs: any = require('fs');

fs.readdir(directory, (err:any, files:any) => {
    files.forEach(file => {
        console.log(file);
    });
});
