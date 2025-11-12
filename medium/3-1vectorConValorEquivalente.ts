/*
    Escriba un programa que defina un vector de numeros y calcule si existe algun numero en el vector cuyo valor equivale a la suma del resto de numeros del vector.
    por ejemplo: [1,2,3,6] -> 6 = 1+2+3
    [1,2,3,4] -> No existe ningun numero que cumpla la condicion
*/

const run = require('../utils/runAsync');
const rellenarArreglo = require('./0-arreglos');

async function main(): Promise<number> {
    const arreglo: number[] = [];
    await rellenarArreglo(arreglo, 'números');
    if (arreglo.length === 0) {
        console.log('El arreglo está vacío.');
        return 0;
    }else{
        const sumaTotal = arreglo.reduce((acc, val) => acc + val, 0);
        let encontrado = false;
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === sumaTotal - arreglo[i]!) {
                console.log(`El número ${arreglo[i]} en la posición ${i} equivale a la suma del resto de números del vector.`);
                encontrado = true;
            }else{
                if (!encontrado && i === arreglo.length -1) {
                    console.log('No existe ningún número que cumpla la condición.');
                }
            }
        }
    }
    return 0;
}

run(main);