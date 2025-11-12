/*
    Escriba un programa que defina un vector de numeros y muestre en la salida el mismo vector pero en orden inverso.
    por ejemplo:
    Vector original: [5, 10, 15]
    Vector inverso: [15, 10, 5]
*/

const run = require('../utils/runAsync'); // Importa la función para ejecutar el programa de manera asíncrona sin repetir try/catch
const rellenarArreglo = require('./0-arreglos'); // Importa la función para rellenar arreglos

async function main() {
    const vector: number[] = [];
    await rellenarArreglo.rellenarArreglo(vector, 'vector');
    const vectorInverso: number[] = [];

    for (let i = vector.length - 1; i >= 0; i--) {
        vectorInverso.push(vector[i]!);
    }
    console.log('Vector original:', vector);
    console.log('Vector inverso:', vectorInverso);
}
run(main);
