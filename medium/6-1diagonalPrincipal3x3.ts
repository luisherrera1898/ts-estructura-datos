/*
    Escriba un programa que defina una matriz de 3x3 y escriba un ciclo para que muestre la diagonal principal de la matriz.
    La diagonal principal de una matriz cuadrada son los elementos que van desde la esquina superior izquierda hasta la esquina inferior derecha.
    Por ejemplo, en una matriz 3x3, los elementos de la diagonal principal son aquellos en las posiciones [0][0], [1][1] y [2][2].
    El programa debe mostrar los elementos de la diagonal principal en la consola.
*/
const definirMatriz = require('../utils/definirMatriz'); //expects xrows ycolums filledWithVariable
const rellenarMatriz = require('../utils/rellenarMatrz');
const run = require('../utils/runAsync');


async function main() {
    const matriz3X3 = definirMatriz(3, 3, null); //defined but filled with null data
    const filledMatriz3x3 = await rellenarMatriz(matriz3X3); //llenamos la matriz con valores ingresados por el user, pueden ser string o numeros

    const principal = () =>{
        for (let i = 0; i < filledMatriz3x3.length; i++) {
            console.log(filledMatriz3x3[i][i]);
        }
    }

    principal();
}

run(main);