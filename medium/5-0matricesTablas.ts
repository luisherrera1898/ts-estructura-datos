/*
    Una matriz bidimensional es una estructura de datos que consiste en una colección de elementos organizados en filas y columnas.
    En TypeScript, una matriz bidimensional se puede representar como una matriz de matrices. Aquí tienes un ejemplo de cómo declarar, inicializar y acceder a los elementos de una matriz bidimensional en TypeScript: 
    ```typescript
    // Declaración e inicialización de una matriz bidimensional
    let matriz: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    2rows of 3 columns

    let matriz2: string[2][3] = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
    ];

    matriz mixta
    let matrizMixta: (number | string)[][] = [
        [1, 'dos', 3],
        ['cuatro', 5, 'seis']
    ];
    // Acceso a los elementos de la matriz
    console.log(matriz[0][0]);
    console.log(matriz[1][2]);
    console.log(matriz[2][1]);
    ```
    En este ejemplo, hemos declarado una matriz bidimensional llamada `matriz` que contiene tres filas y tres columnas. Cada elemento de la matriz se puede acceder utilizando dos índices: el primer índice representa la fila y el segundo índice representa la columna.
*/
const askQuestion: (q: string) => Promise<string> = require('../utils/InteractuableConsole');

async function determinarMatrizNumeros(rows: number, cols: number): Promise<number[][]> {
    const matriz: number[][] = Array.from({ length: rows }, () => new Array<number>(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            while (true) {
                const raw = (await askQuestion(`Ingrese el número para la posición [${i}][${j}]: `)).trim();
                const value = Number(raw);
                if (Number.isFinite(value)) {
                    matriz[i]![j] = value;
                    break;
                } else {
                    console.log('Entrada inválida. Por favor, ingrese un número válido.');
                }
            }
        }
    }

    return matriz;
}

module.exports = { determinarMatrizNumeros };