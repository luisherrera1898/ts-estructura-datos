/*
    Escribe un programa que determine una matriz de 2x2 con sus respectivos valores y luego copiar todo su contenido hacia otra matriz de las mismas dimensiones.
    Finalmente, muestra el contenido de la segunda matriz en la consola.
*/

const definirMatriz = require('../utils/definirMatriz'); //expects xrows ycolums filledWithVariable
const rellenarMatriz = require('../utils/rellenarMatrz');
const run = require('../utils/runAsync');

async function main() {
    const matriz2X2 = definirMatriz(2, 2, null); //defined but filled with null data
    const filledMatriz2X2 = await rellenarMatriz(matriz2X2);
    const matriz2x2Op2 = filledMatriz2X2;
    console.table(matriz2x2Op2);
}

run(main);