const askQuestion = require('../utils/InteractuableConsole');
/*
switch(exoresion){
    case 1: 
        conjunto de instrucciones;
    break;
    case 2:
        conjunto de instrucciones;
    break;
    default:
        conjunto de instrucciones...;
    break;
}
*/

async function main():Promise<number>{
    try {
        let numToEval: number = parseFloat(await askQuestion('digite un numero entre el rango del 1 y el 5: '));
        if(isNaN(numToEval)){
            console.log('Error: introduzca un numero');
            return 1;
        }
        switch (numToEval) {
            case 1:
                console.log('ha introducido el numero 1: es correcto');
                break;
            case 2:
                console.log('ha introducido el numero 2: es correcto');
                break;
            case 3:
                console.log('ha introducido el numero 3: es correcto');
                break;
            case 4:
                console.log('ha introducido el numero 4: es correcto');
                break;
            case 5:
                console.log('ha introducido el numero 5: es correcto');
                break;
            default:
                console.log('Error: introduzca un numero aceptable')
                return 1;
                break;
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();