/*
    Determine un programa que lea de la entrada estándar una serie de números y los almacene en un arreglo. Luego, el programa debe encontrar y mostrar el número mayor en el arreglo junto con su posición (índice) dentro del mismo.
    Por ejemplo:
    Entrada: [3, 5, 2, 8, 6]
    Salida: El número mayor es 8 y se encuentra en la posición 3.
*/
const run = require('../utils/runAsync'); // Importa la función para ejecutar el programa de manera asíncrona sin repetir try/catch
const rellenarArreglo = require('./0-arreglos'); // Importa la función para rellenar arreglos

async function main(): Promise<number>{
    const arreglo: number[] = [];
    await rellenarArreglo.rellenarArreglo(arreglo, 'números');

    if (arreglo.length === 0) {
        console.log('El arreglo está vacío.');
        return 0;
    }else{
        let mayor: number = arreglo[0]!;
        let indiceMayor: number = 0;
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i]! > mayor) {
                mayor = arreglo[i]!;
                indiceMayor = i;
            }
        }
        console.log(`El número mayor es ${mayor} y se encuentra en la posición ${indiceMayor}.`);
    }

    return 0;
} 

run(main);