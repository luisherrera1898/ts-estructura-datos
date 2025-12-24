/*
    Realice un programa que calcule la suma de dos matrices cuadradas de 3x3
    1. definir dos matrices de 3x3
    2. crear una matriz para guardar el valor de la suma de las matrices
    3. retornar esa matriz
*/

import console = require("console");

const run = require('../utils/runAsync');
const definirMatriz = require('../utils/definirMatriz');
const rellenarMatriz: (matriz: string[][]) => Promise<number[][]> = require('../utils/rellenarMatrz');

async function main() {
    const matrizA: string[][] = definirMatriz(3, 3, '0');
    const matrizB: string[][] = definirMatriz(3, 3, '0');

    const matrizARellenada = await rellenarMatriz(matrizA);
    const maitrizBRellenada = await rellenarMatriz(matrizB);

    const matrizSuma: number[][] = definirMatriz(3, 3, 0);
    
}

run(main);