/*
    Escriba un programa que calcule el valor de: 1+3+5+... 2n-1
    0 + 2*1 - 1 = 1
    1 + 2*2 - 1 = 4
    2*0 - 1 = -1
    2*1 - 1 = 1
    2*2 - 1 = 3
    2*3 - 1 = 5
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let n: number = parseInt(await askQuestion('Digite hasta que numero desea sumar: '));
        let resultado: number = 0;
        let acumulador: number = 0;
        if(isNaN(n)){
            console.log('Digite un valor valido.');
            return 1;
        }else{
            for (let i = 1; i < n; i++) {
                resultado = 2*i - 1;
                acumulador += resultado;
                console.log(resultado);
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