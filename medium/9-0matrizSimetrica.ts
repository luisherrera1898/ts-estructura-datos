/*
    Desarrollar un programa que determine si una matriz es simetrica o no. Una matriz es simetrica si es cuadrada y si es igual a su matriz transpuesta

    | 8 1 3 |        | 8 1 3 |
    | 1 7 4 |  -->   | 1 7 4 |
    | 3 4 9 |        | 3 4 9 |

    defiinir una matriz cuadrada
    transponer la matriz
    verificar si es simetrica
*/

const run = require('../utils/runAsync')
const definirMatriz = require('../utils/definirMatriz');
const rellenarMatriz = require('../utils/rellenarMatrz');

function sonMatricesIguales<T>(a: T[][], b: T[][]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i]!.length !== b[i]!.length) return false;
    for (let j = 0; j < a[i]!.length; j++) {
      if (a[i]![j] !== b[i]![j]) return false;
    }
  }
  return true;
}


async function main(){
    const matriz = definirMatriz(3,3, "0");
    const matrizRellenada = await rellenarMatriz(matriz);
    const matrizTranspuesta = definirMatriz(3, 3, "");
    for (let i = 0; i < matrizRellenada.length; i++) {
        for (let j = 0; j < matrizRellenada.length; j++) {
            matrizTranspuesta[j][i] = matrizRellenada[i][j];  
        }
    }

    if (sonMatricesIguales(matrizRellenada, matrizTranspuesta)) {
        console.log("La matriz es simétrica");
        console.table(matrizRellenada);
    } else {
        console.log("La matriz no es simétrica");
    }

}

run(main);