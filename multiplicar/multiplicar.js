const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = '';
    console.log('==================='.green);
    console.log(`===tabla de ${base}====`.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        data = (`${i} * ${base} = ${ i * base}\n`);
        console.log(data);
    }
    return data;
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor intruducido '${ base }' no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${i} * ${base} = ${ i * base}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}