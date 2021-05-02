import * as fs from 'fs';
import * as yargs from 'yargs';
import * as chalk from 'chalk';
import {spawn} from 'child_process';

yargs.command({
    command: 'show',
    describe: 'Show infomations about a file',
    builder: {
      fichero: {
        describe: 'File input',
        demandOption: true,
        type: 'string',
      },
      lines: {
        describe: 'Number of lines',
        demandOption: false,
        type: 'string',
      },
      words: {
        describe: 'Number of words',
        demandOption: false,
        type: 'string',
      },
      caracteres: {
        describe: 'Number of characters',
        demandOption: false,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.fichero === 'string' &&
         (typeof argv.lines === 'string' ||
          typeof argv.words === 'string' ||
          typeof argv.caracteres === 'string')) {
        const filename: string = argv.fichero;
        fs.access(filename, fs.constants.R_OK, (err) => {
          if (err) {
            console.log(chalk.red.inverse(`No file called ${filename}.`));
            } else {
                let check: boolean = false;
            if (argv.lines === 'yes') {
              const wc = spawn('wc', ['-l', filename]);
              let outputLines = ' ';

              wc.stdout.on('data', (piece) => { outputLines += piece; });
              wc.stdout.on('close', () => {
                const outputLinesArray = outputLines.split(/\s+/);
                console.log(`There are ${outputLinesArray[1]} lines.`);
              });   
              //Utilizando modo pipe, imprime directamente  
              //Si no utiliza el modo pipe seria con console.log
              //console.log(`In the file ${filename}, there are ${wcOutputAsArray[1]} lines`); 
              wc.stdout.pipe(process.stdout);
              check = true;
            }

            if (argv.words === 'yes') {
              const wc = spawn('wc', ['-w', filename]);
              let outputwords = ' ';

              wc.stdout.on('data', (piece) => { outputwords += piece;});
              wc.stdout.on('close', () => {
                const outputwordsArray = outputwords.split(/\s+/);
                console.log(`There are ${outputwordsArray[1]} words.`);
              });
              //Utilizando modo pipe, imprime directamente  
              //Si no utiliza el modo pipe seria con console.log
              //console.log(`In the file ${filename}, there are ${wcOutputAsArray[1]} lines`); 
              wc.stdout.pipe(process.stdout);
              check = true;
            }
            
            if (argv.caracteres === 'yes') {
              const contadorCaracteres = spawn('wc', ['-m', filename]);
              let outputCaracteres = ' ';

              contadorCaracteres.stdout.on('data', (piece) => { outputCaracteres += piece; });
              contadorCaracteres.stdout.on('close', () => {
                const outputCaracteresArray = outputCaracteres.split(/\s+/);
                console.log(`There are ${outputCaracteresArray[1]} characters.`);
              });
              //Utilizando modo pipe, imprime directamente  
              //Si no utiliza el modo pipe seria con console.log
              //console.log(`In the file ${filename}, there are ${wcOutputAsArray[1]} characters`);
              contadorCaracteres.stdout.pipe(process.stdout);
              check = true;
            }

            if (!check) {
              console.log(chalk.red.inverse('Run the program with some or all of these options: --lines = yes --words = yes --characters == yes'));
            }
          }
        });
      }
    },
  })

yargs.parse();