/*
Escriba un programa que lea de la entrada estandr dos numeros y muestre en la salida estandar su suma, resta, multiplicacion y division
*/
import console = require("node:console");
async function main(): Promise<number>{
    const askQuestion = require('../utils/InteractuableConsole') //
    try {
        let userStringNumber1:string = await askQuestion('Digite su primer numero: ');
        let userStringNumber2:string = await askQuestion('Digite su segundo numero: ');

        let userNumber1 = parseFloat(userStringNumber1);
        let userNumber2 = parseFloat(userStringNumber2);

        if ( isNaN(userNumber1) || isNaN(userNumber2) ){
            console.log('Por favor digite un numero valido.');
            return 1;
        }
        
        const suma = (numberOne: number, numberTwo: number): number => numberOne + numberTwo;
        const resta = (numberOne: number, numberTwo: number): number => numberOne - numberTwo;
        const multiplicacion = (numberOne: number, numberTwo: number): number => numberOne * numberTwo;
        const division = (numberOne: number, numberTwo: number): number => numberOne / numberTwo;

        console.log('La suma de ambos numeros es:', suma(userNumber1, userNumber2) );
        console.log('La suma de ambos numeros es:', resta(userNumber1, userNumber2) );
        console.log('La suma de ambos numeros es:', multiplicacion(userNumber1, userNumber2) );
        console.log('La suma de ambos numeros es:', division(userNumber1, userNumber2) );
        
        return 0;

    }catch (error) {
        console.error("An error occurred:", error);
        return 1;
    }
}
main();