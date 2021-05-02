//Muestre por pantalla aquel fichero que contiene más caracteres.

import {watchFile} from 'fs';
import {spawn} from 'child_process';


watchFile('/home/usuario/practica09/ficheros', (curr, prev) => {

    const wc = spawn('wc', ['']);

    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);

    wc.on('close', () => {
    const wcOutputAsArray = wcOutput.split(/\s+/);
    console.log(`File has ${wcOutputAsArray[1]} lines`);
    console.log(`File has ${wcOutputAsArray[2]} words`);
    console.log(`File has ${wcOutputAsArray[3]} characters`);
    
  });
});