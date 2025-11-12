/*
    Realice un programa que lea entrada de numeros hasta que se introduzca un cero. En ese momenmto el programa debe terminar y mostrar en la salida el numero de valores mayores que 0 leidos

    [1,2,3,4,-2,-3,5,0] ---> 5 numeros mayores que cero registrados...
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let userInput: number = 0;
        let userInputSaved: number[] = [];
        let i:number = 0;
        do{
            userInput = parseFloat(await askQuestion("Digite un numero: "));
            if(isNaN(userInput)){
                console.log('por favor digitar un numero.');
                return 1;
            }else{
                userInputSaved[i] = userInput;
                i++;
            }
        }while(userInput !== 0);

        const positiveNumbers = userInputSaved.filter(num => num > 0);
        console.log(`${positiveNumbers.length} numeros mayores que cero registrados...`);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();