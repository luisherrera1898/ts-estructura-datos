/*
    Realice un programa que calcule la descomposicion en factores primos de un numero entero.
    por ejemplo: 20 = 2*2*5.
    20 % 2 === 0? 2 primo
    20 / 2 = 10

    10 % 2 === 0? 2 primo
    10 / 2 = 5

    5 % 2 === 0? No

    5 % 3 === 0? No

    5 % 4 === 0? No

    5 % 5 === 0? 5 primo
    5 / 5 = 1

*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let userData: number = parseInt(await askQuestion('Digite un numero para conseguir sus factores primos: '));
        
        if (isNaN(userData) || userData < 1) {
            console.log('Por favor ingrese un numero entero positivo valido.');
            return 1;
        }else{
            while (userData > 1) {
                for (let i = 2; i <= userData; i++) {
                    if (userData % i === 0) {
                        console.log(i);
                        userData = userData / i;
                        break;
                    }
                }
        }
    }

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();