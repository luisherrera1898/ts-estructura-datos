/*
    Hacer una matriz preguntando al usuario el numero de filas y columnas, llenarrla de numeros aleatorios, copiar el contenido a otra matriz y por ultimo mostrarla en pantalla
    1. definir una matriz segun el usuario
    2. llenar la matriz con numeros aleatorios.
    3. copiarla a otra matriz
    4. mostrar la matriz copiada
*/

const run = require('../utils/runAsync');
const llenarValor = require('../utils/llenarValor');
const verified = require('../utils/IsIntNumber');
const definirMatriz = require('../utils/definirMatriz');

async function main() {
    const x = parseFloat(await llenarValor()); const xVerified = verified(x);
    const y = parseFloat(await llenarValor()); const yVerified = verified(y);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (xVerified !== true || yVerified !== true) {
        console.error('Digite numeros enteros.');
        return 1;
    }

    const userMatriz = definirMatriz(x, y, null);
    
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            userMatriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }

    const copyMatriz = JSON.parse(JSON.stringify(userMatriz));


    console.table(copyMatriz);
}

run(main);