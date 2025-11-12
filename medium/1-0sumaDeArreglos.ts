/*
    Escriba un programa que defina un vector de numero y calcule la suma de sus elementos.
    El programa debe permitir al usuario ingresar los elementos del vector.
    El programa debe mostrar la suma total de los elementos del vector.
*/
const rellenarArreglo = require('./0-arreglos');

async function main(): Promise<number> {
    
    const arreglo1: number[] = [];
    await rellenarArreglo(arreglo1, 'A');
    let resultadoSuma: number = arreglo1.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(resultadoSuma);
    return 0;
}

const run = require('../utils/runAsync');
run(main);