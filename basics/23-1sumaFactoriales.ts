/*
    Escriba un programa que calcule el valor de la suma de factoriales: 1*2*3*...*n (factorial)
    valor de: 1!+2!+3!+4!+... n!
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let numEval: number = parseInt(await askQuestion('Digite el numero al cual desea calcular su factorial: '));
        let resultado: number = 1;
        let acumulador: number = 0;

        if(isNaN(numEval)){
            console.log('Digite un valor valido.');
            return 1;
        }else{
            for (let i = 1; i <= numEval; i++) {
                resultado *= i;
                acumulador += resultado;
            }
            console.log(acumulador);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();

