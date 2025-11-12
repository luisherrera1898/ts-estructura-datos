/*
    Escriba un programa que defina una matriz de 3x3 y escriba un ciclo para que muestre la diagonal principal de la matriz.
    La diagonal principal de una matriz cuadrada son los elementos que van desde la esquina superior izquierda hasta la esquina inferior derecha.
    Por ejemplo, en una matriz 3x3, los elementos de la diagonal principal son aquellos en las posiciones [0][0], [1][1] y [2][2].
    El programa debe mostrar los elementos de la diagonal principal en la consola.
*/
const run = require('../utils/runAsync');
const askQuestion: (q: string) => Promise<string> = require('../utils/InteractuableConsole');

async function main(): Promise<number> {
    const matriz: number[][] = [];

    for (let i = 0; i < 3; i++) {
        // aseguramos la fila
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            // pedimos hasta recibir un número válido
            while (true) {
                const raw = (await askQuestion(`Ingrese el número para la posición [${i}][${j}]: `)).trim();
                const value = parseFloat(raw);
                if (Number.isFinite(value)) {
                    matriz[i]![j] = value;
                    break; // salió bien, pasamos a la siguiente celda
                }
                console.log('Entrada inválida. Por favor ingrese un número válido.');
            }
        }
    }

    console.log('La diagonal principal de la matriz es:');
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i]![i]);
    }
    return 0;
}

run(main);
