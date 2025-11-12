const askQuestion = require('../utils/InteractuableConsole');
/*
    Escriba un programa que lea dos numeros y determine cual de ellos es el mayor
*/
async function main():Promise<number>{
    try {
        let numEvalA: number = parseFloat(await askQuestion('Digite el numero A: '));    
        let numEvalB: number = parseFloat(await askQuestion('Digite el numero B: '));    
        
        if( (!isNaN(numEvalA) || !isNaN(numEvalB)) && (numEvalA !== numEvalB)){
            const operacion = (): string => numEvalA > numEvalB ? `La variable A con el numero: ${numEvalA} es mayor` : `La variable B con el numero: ${numEvalB} es mayor`;
            console.log(operacion());
        }else if(isNaN(numEvalA) || isNaN(numEvalB)){
            console.log('Debe digitar numeros para poder operar');
            return 1;
        }else{
            console.log('Asegurese de digitar numeros distintos para poder determinar el mayor de ambos')
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }    
}
main();