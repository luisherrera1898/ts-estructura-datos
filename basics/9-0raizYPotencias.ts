const askQuestion = require('../utils/InteractuableConsole');
/*
    Realice un programa que calcule el valor que toma la siguiente funcion para unos valores dados de x e y:
    f(x,y) = sqrt(x) / pow(y,2) - 1
*/

const expresion = (x:number, y:number) => Math.sqrt(x) / (Math.pow(y,2) - 1)

async function main():Promise<number> {
    try {
        let x: number = parseFloat(await askQuestion('digite el valor de x: '));
        let y: number = parseFloat(await askQuestion('digite el valor de y: '));
        if ((isNaN(x) || x === undefined || x === null) || (isNaN(y) || y === undefined || y === null)){
            console.log('Error: Invalid inputs');
            return 1;
        }else{
            const resultado:number = parseFloat(expresion(x, y).toFixed(2));
            console.log(resultado);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();