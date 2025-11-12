/*
    Realice un programa que solicite de la entrada estandar un entero del 1 al 10 y muestre en la salida estandar su tabla de multiplicar.
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    let numEval:number = parseInt(await askQuestion('Digite un numero: '));
    let resultado: number = 0;
    let respuesta: string = "";

    for (let i = 0; i < 10; i++) {
        if (i+1 === 10) {
            respuesta += `${numEval} * ${i+1} = ${resultado}`;
        }else{
            resultado = numEval * i+1
            respuesta += `${numEval} * ${i+1} = ${resultado}\n`;
        }
    }
    console.log(respuesta);

    return 0;
}

main();