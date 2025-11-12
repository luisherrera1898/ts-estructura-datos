const askQuestion = require('../utils/InteractuableConsole');
/*
    Escriba un programa que calcule las soluciones de una ecuacion de segundo grado de la forma ax cuadrado + bx + c = 0
    teniendo encuenta que:
    x = ( -b + sqrt(pow(b,2) - 4*a*c) ) / (2*a)
    x1= ( -b - sqrt(pow(b,2) - 4*a*c) ) / (2*a)
*/
const expresion = (a: number, b: number, c: number):number[] => {
    const x = parseFloat( (( -b + Math.sqrt(Math.pow(b,2) - 4*a*c) ) / (2*a)).toFixed(2) );
    const x1= parseFloat( (( -b - Math.sqrt(Math.pow(b,2) - 4*a*c) ) / (2*a)).toFixed(2) );
    const resultado:number[] = [x, x1];
    return resultado; 
}

async function main():Promise<number | number[]> {
    try {
        let a: number = parseFloat(await askQuestion('digite el valor para la variable a: '));
        let b: number = parseFloat(await askQuestion('digite el valor para la variable b: '));
        let c: number = parseFloat(await askQuestion('digite el valor para la variable c: '));
        if(isNaN(a) || isNaN(b) || isNaN(c)){
            console.log('Error: invalid input. ')
            return 1;
        }else{
            console.log(expresion(a, b, c));
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();