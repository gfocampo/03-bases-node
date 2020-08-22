// requireds
//const fs = require('fs');
// const fs = require('express'); => paquete creado en npm
const { argv } = require('./config/yargs.js'); // => creados por mi
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); // => creados por mi

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // console.log(listarTabla(argv.base, argv.limite));

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.yellow))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(argv);

// console.log(process.argv);

let argv2 = process.argv;
// console.log(argv.base);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];