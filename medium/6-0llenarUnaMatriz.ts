/*
    Escriba un programa para rellenar una matriz pidiendo al usuario el numero de filas y columnas,
    y luego solicitando los elementos de la matriz fila por fila.
    Finalmente, imprima la matriz completa en la consola.

    problemas a resolver:
    1 no se de que tamaño es la matriz debemos definir un x y un y para calcular la matriz
    let matriz[x][y] donde x y y son numeros ingresados por el usuario

    2. rellenas la matriz pidiendo los elementos fila por fila

    3 imprimir la matriz en consola.
*/
const askQuestion = require('../utils/InteractuableConsole');
//import askQuestion from ''..
const llenarValor = require('../utils/llenarValor'); //retorna una promise en string de lo que se digite en value
const run = require('../utils/runAsync');
const IsIntNumber = require('../utils/IsIntNumber'); //nos ayuda a comprobar que el usuario digito un numero entero
const definirMatriz = require('../utils/definirMatriz'); // nos ayuda a definir una matriz de x filas y columnas, el tercer parametro es con que elementos default se llenara la matriz
const rellenarMatriz = require('../utils/rellenarMatrz');
//falta llenar la matriz con numeros o caracteres personalizados recorriendo la matriz :)

async function main(): Promise<number>{
    
    const x: number = parseFloat(await llenarValor());  const xVerified:boolean = IsIntNumber(x);
    const y: number = parseFloat(await llenarValor());  const yVerified:boolean = IsIntNumber(y);
    
    if (xVerified !== true || yVerified !== true) {
        console.error('Digite numeros enteros.');
        return 1;
    }

    const matriz = definirMatriz(x, y, 0);
    const matrizFilled = await rellenarMatriz(matriz)
    console.table(matrizFilled);
    
    return 0;
}

run(main);