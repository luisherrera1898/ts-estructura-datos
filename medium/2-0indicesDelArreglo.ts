/*
    Escriba un programa que lea de la entrada estandar un vector de numeros y muestre en la salida estandar los numeros del vector con sus indices asociados.
    por ejemplo: 
    Indice 0: 5
    Indice 1: 10
    Indice 2: 15
*/
const run = require('../utils/runAsync'); // Importa la función para ejecutar el programa de manera asíncrona sin repetir try/catch
const rellenarArreglo = require('./0-arreglos'); // Importa la función para rellenar arreglos

async function main(): Promise<number> {   
    const arreglo1: number[] = [];
    await rellenarArreglo(arreglo1, 'A');
    arreglo1.forEach((valor, indice) => {
        console.log(`Indice ${indice}: ${valor}`);
    });
    return 0;
}

run(main);