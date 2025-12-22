/*
    Realice un programa que lea una matriz de 3x3 y cree su matriz transpuesta.
    La matriz transpuesta es aquella en la que la columna i era la fila i de la matriz original.
    c               r 
   r/1 2 3/        c/1 4 7/
    /5 4 6/    -->  /2 5 8/
    /7 8 9/         /3 6 9/
    1. crear una matriz 3x3
    2. llenar la matriz 3x3
    3. transponer la matriz
    4. retornar la matriz transpuesta
*/
const run = require('../utils/runAsync');
const definirMatriz = require('../utils/definirMatriz');
const rellenarMatriz = require('../utils/rellenarMatrz');

async function main() {
    const matrizPredefinida = definirMatriz(3, 3, "");
    const matrizRellenada = await rellenarMatriz(matrizPredefinida);
    const matrizTranspuesta = definirMatriz(3, 3, "");
    
    for (let i = 0; i < matrizRellenada.length; i++) {
        for (let j = 0; j < matrizRellenada.length; j++) {
            matrizTranspuesta[j][i] = matrizRellenada[i][j];  
        }
   
    }
    console.table(matrizRellenada);
    console.table(matrizTranspuesta);
}

run(main);

