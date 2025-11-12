/*
    Escriba un programa que defina un vector de numeros y calcule la multiuplicación de sus elementos.
    El programa debe permitir al usuario ingresar los elementos del vector.
    El programa debe mostrar la multiplicación total de los elementos del vector.
*/
const run = require('../utils/runAsync'); // Importa la función para ejecutar el programa de manera asíncrona sin repetir try/catch
const rellenarArreglo = require('./0-arreglos'); // Importa la función para rellenar arreglos

async function main(): Promise<number> {   
    const arreglo1: number[] = [];
    await rellenarArreglo(arreglo1, 'A');
    console.log(arreglo1);
    let resultadoMultiplicacion: number = arreglo1.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
    console.log(resultadoMultiplicacion);
    return 0;
}

run(main);