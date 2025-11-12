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
const askQuestion: (q: string) => Promise<string> = require('../utils/InteractuableConsole');
const run = require('../utils/runAsync');
const determinarMatriz = require('./5-0matricesTablas.ts');

async function main(): Promise<number>{
    const rawRows =  parseInt(await askQuestion('Ingrese el número de filas de la matriz: '));
    const rawCols =  parseInt(await askQuestion('Ingrese el número de columnas de la matriz: '));
    if (isNaN(rawRows) || isNaN(rawCols) || rawRows <= 0 || rawCols <= 0) {
        console.log('Por favor, ingrese números válidos para filas y columnas.');
        return 1;
    }else{
        const matriz: number[][] = await determinarMatriz.determinarMatrizNumeros(rawRows, rawCols);
        console.log('Matriz completa:');
        console.table(matriz);
    }

    return 0;
}

run(main);

 