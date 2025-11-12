const askQuestion = require('../utils/InteractuableConsole') //
/*
1. Escribe la siguiente expresión como expresión a / b + 1....
2. Escribe la siguiente expresión matemática como expresión a+b / c+d...
*/
const expresion =   (a:number, b:number):number => (a/b) + 1

async function main(): Promise<number>{
    try {
        let aStr = await askQuestion('Digite un numero: ');
        let bStr = await askQuestion('Digite un segundo numero: ');
        let a:number = parseFloat(aStr),
            b:number = parseFloat(bStr), 
            resultado:number = 0;

        console.log(resultado = expresion(a,b));
        return 0;
    } catch (error) {
        console.error('Error has ocurred ', error);
        return 1;
    }
}
main();