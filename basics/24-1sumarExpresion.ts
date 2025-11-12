/*
    Hacer un programa que calcule el resultado de la siguiente expresion: 1-2 + 3-4 + 5-6 + 7-8...n
    -1 + -1 + -1 + -1
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let numEval: number = parseInt(await askQuestion('Digite hasta que numero desea realizar la operacion: '));
        if (isNaN(numEval)) {
            console.log('digite un numero valido por favor.');
            return 1;
        }
        let resultado: number = 0;
        let acumulador: number = 0;
        for (let i = 1, j = 2, y=1; y <= numEval; i+=2, j+=2, y++) {
            resultado = (i - j);
            acumulador += resultado;
            console.log(acumulador);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();

