// let numeros: number[] = [1, 2, 3, 4, 5];
// let frutas: string[] = ['manzana', 'banana', 'cereza'];
// let mezclado: (number | string)[] = [1, 'dos', 3, 'cuatro'];

const askQuestion = require('../utils/InteractuableConsole'); // Importa la función para interactuar con la consola
async function rellenarArreglo(arreglo: number[], nombreArreglo: string) {
    do {
        const entrada = parseFloat(await askQuestion(`Ingrese un número para el arreglo ${nombreArreglo} (o 'fin' para terminar): `));
        if (isNaN(entrada)) {
            break;
        }else{
            arreglo.push(entrada);
        }
    }while (true);

}
// Para rellenar un arreglo de números usaremos la función rellenarArreglo para evitar repetir código en archivos futuros :).

module.exports = rellenarArreglo;