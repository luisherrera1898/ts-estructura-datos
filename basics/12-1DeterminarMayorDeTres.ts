const askQuestion = require('../utils/InteractuableConsole');
/*
    Escriba un programa que lea dos numeros y determine cual de ellos es el mayor
*/
async function main():Promise<number>{
    try {
        let numEvalA: number = parseFloat(await askQuestion('Digite el numero A: '));    
        let numEvalB: number = parseFloat(await askQuestion('Digite el numero B: '));    
        let numEvalC: number = parseFloat(await askQuestion('Digite el numero C: '));    
        
        if (isNaN(numEvalA) || isNaN(numEvalB) || isNaN(numEvalC)) {
            console.log('Por favor digitar numeros...');
            return 1;
        }else{
            let resultado: number = 0;
            if(numEvalA > numEvalB && numEvalA > numEvalC){
                resultado = numEvalA;
            }else if(numEvalB > numEvalA && numEvalB > numEvalC){
                resultado = numEvalB;
            }else{
                resultado = numEvalC;
            }
            console.log(`El numero mayor conseguido entre los 3 digitados es: ${resultado}`);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }    
}
main();