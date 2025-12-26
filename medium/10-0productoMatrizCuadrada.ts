/*
    Programa que calcula el producto de dos matrices cuadradas de 3x3.
    1. Definir dos matrices cuadradas
    2. Rellenar las matrices con valores del usuario
    3. Definir una matriz para almacenar el valor del producto
    4. Guardar el resultado de las operaciones en cada posición de la matriz resultado
    5. Retornar la matriz resultado con el valor del producto de las matrices anteriores.
*/

const run = require('../utils/runAsync');
const definirMatriz = require('../utils/definirMatriz');
const rellenarMatriz = require('../utils/rellenarMatrz');

async function main() {
    // Definir matrices de 3x3
    const matrizA = definirMatriz(3, 3, "");
    const matrizB = definirMatriz(3, 3, "");

    // Rellenar matrices con valores del usuario
    const matrizARellenada = await rellenarMatriz(matrizA);
    const matrizBRellenada = await rellenarMatriz(matrizB);

    // Definir matriz resultado
    const resultado = definirMatriz(3, 3, 0);

    if (matrizARellenada && matrizBRellenada) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let suma = 0;
                for (let k = 0; k < 3; k++) {
                    suma += matrizARellenada[i][k] * matrizBRellenada[k][j];
                }
                resultado[i][j] = suma;
            }
        }
    }

    console.table(resultado);
}

run(main);
