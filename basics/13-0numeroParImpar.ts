const askQuestion = require('../utils/InteractuableConsole');
/*
    Realice un programa que lea un valor entero y determine si se trata de un numero par o impar.
*/

async function main():Promise<number>{
    try {
        let numEval:number = parseFloat(await askQuestion('Digite un numero para consultar si es par o impar: '));
        if (isNaN(numEval)) {
            console.log('Error: invalid inputs');   
        }else{
            if(numEval % 2 === 0){
                console.log('El numero es par. ');
            }else{
                console.log('El numero es impar. ');
            }
        }
        return 0;
    } catch (error) {
        return 1;
    }
}
main();