// let numeros: number[] = [1, 2, 3, 4, 5];
// let frutas: string[] = ['manzana', 'banana', 'cereza'];
// let mezclado: (number | string)[] = [1, 'dos', 3, 'cuatro'];

const askQuestion: (q: string) => Promise<string> = require('../utils/InteractuableConsole');

async function rellenarArreglo(arreglo: number[], nombreArreglo: string): Promise<void> {
    while (true) {
        const raw = (await askQuestion(`Ingrese un número para el arreglo ${nombreArreglo} (o 'fin' para terminar): `)).trim();
        if (raw.toLowerCase() === 'fin') break;

        const num = Number(raw);
        if (Number.isFinite(num)) {
            arreglo.push(num);
        } else {
            console.log('Entrada no válida. Ingrese un número o "fin" para terminar.');
        }
    }
}

async function rellenarArregloDeCadenas(arreglo: string[], nombreArreglo: string): Promise<void> {
    while (true) {
        const entrada = (await askQuestion(`Ingrese una cadena para el arreglo ${nombreArreglo} (o 'fin' para terminar): `)).trim();
        if (entrada.toLowerCase() === 'fin') break;
        if (entrada.length === 0) {
            console.log('Entrada vacía. Intente de nuevo o escriba "fin" para terminar.');
            continue;
        }
        arreglo.push(entrada);
    }
}

module.exports ={ rellenarArreglo, rellenarArregloDeCadenas};