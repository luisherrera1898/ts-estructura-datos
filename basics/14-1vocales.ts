/*
    Escriba un programa que lea de la entrada estandar un caracter e indique en la salida estandar si el caracter es una vocal minuscula, es una vocal mayuscula o no es una vocal.
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number> {
    try {
        let stringEval:string = await askQuestion('Digite una vocal para verificar si su vocal es minuscula o mayuscula: '); 
        if(!isNaN(parseFloat(stringEval))){
            console.log('no ha digitado una letra.')
            return 0;
        }else{
            let vocalMinus: string[] = ['a','e','i','o','u'];
            let vocalMayus: string[] = ['A','E','I','O','U'];

            let minusFound = vocalMinus.find( (element)=> element === stringEval);
            let mayusFound = vocalMayus.find( (element)=> element === stringEval);

            if(minusFound){
                console.log('Usted ingreso una vocal minuscula.');
                return 0;
            }else if(mayusFound){
                console.log('Usted ingreso una vocal mayuscula.');
                return 0;
            }else{
                console.log('Usted ingreso un caracter que no es una vocal.')
            }
        }
        return 0;
    } catch (error) {
        return 1;
    }
}
main();