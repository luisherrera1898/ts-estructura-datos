/*
    Escribir un menu que considere las siguientes opciones: 
    1. cubo de un numero
    2. numero par o impar
    3. salir.
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main(): Promise<number> {
    try {
        let numEval: number = parseFloat(await askQuestion(`Digite la opcion a realizar: \n1. Cubo de un numero\n2. numero par o impar\n3. salir.\n`));
        if (isNaN(numEval) || (numEval > 3 || numEval < 1)) {
            console.log('Digite una opcion valida.');
            return 1;
        }
        let userNumber: number = 0;
        switch(numEval){
            case 1:
                userNumber = parseFloat(await askQuestion('Digite el numero para realizar la operacion al cubo: '));
                if (isNaN(userNumber)) {
                    console.log('Digite un numero valido por favor.');
                    return 1;
                }
                let cubo:number = Math.pow(userNumber, 3);
                console.log(`El cubo del numero que digito (${userNumber}) es: ${cubo}`);
            break;
            case 2:
                userNumber = parseFloat(await askQuestion('Digite el numero para determinar su paridad: '));
                if (isNaN(userNumber)) {
                    console.log('Digite un numero valido por favor.');
                    return 1;
                }
                let parImpar:boolean = userNumber % 2 === 0 ? true : false;
                if(parImpar === true){
                    console.log(`El numero ingresado fue: ${userNumber} y es par`);
                }else{
                    console.log(`El numero ingresado fue: ${userNumber} y es impar`)
                }
            break;
            case 3: return 0;
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();