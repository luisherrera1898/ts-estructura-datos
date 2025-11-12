/*
    Escribe un programa que lea de la entrada estandar tres numeros. despues debe leer un cuarto numero e indicar si el numero coincide con alguno de los introducidos con anterioridad.
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let numsEval: number[] = [  parseFloat(await askQuestion('Digite el primer numero: ')),
                                    parseFloat(await askQuestion('Digite el segundo numero: ')),
                                    parseFloat(await askQuestion('Digite el tercer numero: '))];

        if(numsEval.some(isNaN)){
            console.log('Asegurese de digitar numeros.');
            return 1;
        }

        let numCheck: number = parseFloat(await askQuestion('Digite un numero para comparar si es igual a alguno de los anteriores: '));
        
        if(isNaN(numCheck)){
            console.log('Asegurese de digitar un numero para comparar.')
            return 1;
        }

        if (numsEval.includes(numCheck)) {
            console.log('El numero coincide con alguno de los anteriores.');
        } else {
            console.log('El numero no coincide con ninguno de los anteriores.');
        }

        return 0;
    } catch (error) {
        return 1;
    }
}
main();