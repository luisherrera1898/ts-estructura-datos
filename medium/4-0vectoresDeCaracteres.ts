/*
    Realiza un programa que defina dos vectores de caracteres y después almacene el contenido de ambos vectores en un nuevo vector.
    Situando en promer lugar los elementos del primer vector seguido por los elementos del segundo vector. Muestre el contenido del nuevo vector en la salida estandar.
    por ejemplo: 
    vector1 = ['a','b','c']
    vector2 = ['d','e','f']
    vector3 = ['a','b','c','d','e','f']
*/
const run = require('../utils/runAsync');
const rellenarArreglo = require('./0-arreglos');

async function main(): Promise<number> {
    const vector1: string[] = [];
    const vector2: string[] = [];
    await rellenarArreglo.rellenarArregloDeCadenas(vector1, 'vector 1');
    await rellenarArreglo.rellenarArregloDeCadenas(vector2, 'vector 2');
    const vector3: string[] = [...vector1, ...vector2];
    console.log('Contenido del nuevo vector:', vector3);
    return 0;
}
run(main);
// --- IGNORE --- en c++ era mas complicado por los temas de memoria y punteros pero en TS con los arreglos es muy sencillo hacer esto con el operador spread ... 😊