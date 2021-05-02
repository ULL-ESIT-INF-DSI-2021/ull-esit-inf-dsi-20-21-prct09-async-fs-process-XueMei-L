import * as fs from 'fs';
import {spawn} from 'child_process';

/**
 * Acceder al directorio correspondiente y mostrar las informacion sobre dicho fichero
 */
const filename: string = '/home/usuario/practica09/ficheros/test1.txt';
fs.access(filename, fs.constants.R_OK, (err) => {
    const wc = spawn('wc', ['-1', filename]);

    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);

    wc.on('close', () => {
    const wcOutputAsArray = wcOutput.split(/\s+/);
    console.log(`File has ${wcOutputAsArray[1]} lines`);
    console.log(`File has ${wcOutputAsArray[2]} words`);
    console.log(`File has ${wcOutputAsArray[3]} characters`);
  });
});