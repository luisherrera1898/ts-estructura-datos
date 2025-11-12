/*
    Escriba un program que calcule x elevado a la y. Donde tanto x como y son enteros positivos, sin utilizar la funcion pow
*/
const askQuestion = require('../utils/InteractuableConsole');

const power = (base: number, poten: number):number => {
    let resultado: number = 0;
    let acumulador: number = base;

    for (let i = 1; i < poten; i++) {
        resultado = (acumulador * base);
        acumulador = resultado;
    }
    return resultado;
} 

async function main():Promise<number>{
    try {
        let x: number = parseInt(await askQuestion('Digite el valor de x: '));
        let y: number = parseInt(await askQuestion('Digite el valor al que desear potenciar x: '));

        console.log(power(x, y));
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();