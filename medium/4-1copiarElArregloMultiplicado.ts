/*
    Hacer un programa que lea 5 numeros en un arreglo, los multiplique por 2 y los copie a otro arreglo.
    por ejemplo:
    arreglo1 = [1,2,3,4,5]
    arreglo2 = [2,4,6,8,10]
    se debe mostrar el contenido del segundo arreglo en la salida estandar.
*/
const run = require('../utils/runAsync');
const rellenarArreglo = require('./0-arreglos');

async function main(): Promise<number> {
    const arreglo1: number[] = [];
    await rellenarArreglo.rellenarArreglo(arreglo1, 'números');
    const arreglo2: number[] = arreglo1.map(num => num * 2);
    console.log('Contenido del segundo arreglo:', arreglo2);
    return 0;
}
run(main);
