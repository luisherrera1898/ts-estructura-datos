/*
    Escriba un programa que calcule el valor de: 1+2+3+...+n
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let n: number = parseInt(await askQuestion('Digite hasta que numero desea sumar: '));
        let acumulador: number = 0;
        if(isNaN(n)){
            console.log('Digite un valor valido.');
            return 1;
        }else{
            for (let i = 0; i < n; i++) {
                acumulador += i+1;
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