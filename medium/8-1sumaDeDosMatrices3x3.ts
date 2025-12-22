/*
    Realice un programa que calcule la suma de dos matrices cuadradas de 3x3
    1. definir dos matrices de 3x3
    2. crear una matriz para guardar el valor de la suma de las matrices
    3. retornar esa matriz
*/

const run = require('../utils/runAsync');
const definirMatriz = require('../utils/definirMatriz');
const rellenarMatriz: (matriz: string[][]) => Promise<number[][]> = require('../utils/rellenarMatrz');

async function main() {
    const matrizA = definirMatriz(3, 3, 0) as number[][];
    const matrizB = definirMatriz(3, 3, 0) as number[][];
 
    const matrizARellenada = await rellenarMatriz(matrizA as unknown as string[][]);
    const matrizBRellenada = await rellenarMatriz(matrizB as unknown as string[][]);

    const matrizSuma = definirMatriz(3, 3, 0) as number[][];

    for (let i = 0; i < matrizARellenada.length; i++) {
        const rowA = matrizARellenada[i];
        const rowB = matrizBRellenada[i];
        const rowSum = matrizSuma[i];
        
        if (rowA && rowB && rowSum) {
            for (let j = 0; j < rowA.length; j++) {
                rowSum[j] = rowA[j] + rowB[j];
            }
        }
    }
    console.table(matrizARellenada);
    console.table(matrizBRellenada);
    console.table(matrizSuma);
}

run(main);
