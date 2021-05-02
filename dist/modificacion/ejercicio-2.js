"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const child_process_1 = require("child_process");
fs_1.watchFile('/home/usuario/practica09/ficheros', (curr, prev) => {
    const wc = child_process_1.spawn('wc', ['']);
    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);
    wc.on('close', () => {
        const wcOutputAsArray = wcOutput.split(/\s+/);
        console.log(`File has ${wcOutputAsArray[1]} lines`);
        console.log(`File has ${wcOutputAsArray[2]} words`);
        console.log(`File has ${wcOutputAsArray[3]} characters`);
    });
});
