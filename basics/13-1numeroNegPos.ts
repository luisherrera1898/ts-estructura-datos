
/**
    comprobar si un numero digitado por el usuario es positivo o negativo
*/
const askQuestion = require('../utils/InteractuableConsole');
async function main(): Promise<number>{
    try {
        let numEval: number = parseFloat(await askQuestion('Digite un numero para comprobar si es positivo o negativo: '));
        if(isNaN(numEval)){
            console.log('Error: invalid input.');
            return 1;
        }
        if (numEval === 0) {
            console.log('el numero es neutro');
        }else {
            let resultado: string = (() => (numEval > 0 ? 'positivo' : 'negativo'))(); //IIFE inmedietly invoked function expresion wowoowwowo
            console.log(resultado);
        }

        return 0;
    } catch (error) {
        console.error(error)
        return 1;
    }
}
main();