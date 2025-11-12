const askQuestion = require('../utils/InteractuableConsole')
/*
Escriba un programa que intercambie los valores de dos variables.
*/

async function main():Promise<number> {
    try {
        let xStr: string = await askQuestion('Digite x: ');
        let yStr: string = await askQuestion('Digite x: ');
        let intercambio: number;
        let x:number = parseFloat(xStr);
        let y:number = parseFloat(yStr)
        
        if ((x === undefined || isNaN(x)) || (y===undefined || isNaN(y))) {
            console.log('Error: invalid inputs')
            return 1;
        }else{
            intercambio = x;
            x = y;
            y = intercambio;
            console.log(`la variable x es: ${x} y la variable y es: ${y}`);
        }

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }

}

main();
