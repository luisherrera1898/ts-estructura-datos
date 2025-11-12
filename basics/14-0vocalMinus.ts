/*
    Escriba un programa que lea de la entrada estandar un caracter e indique en la salida estandar si el caracter es una vocal minuscula o no.
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number> {
    try {
        let stringEval:string = await askQuestion('Digite una vocal para verificar si su vocal es minuscula o mayuscula: '); 
        let acceptedVocals:string[] = ['a', 'e', 'i', 'o', 'u'];
        for(let i= 0; i< acceptedVocals.length; i++){
            if (stringEval === acceptedVocals[i]) {
                console.log(`usted ha introducido una vocal minuscula.`);
                break;
            }else{
                console.log('Usted no ha introducido una vocal minuscula.');
                return 1;
            }
        }
        return 0;
    } catch (error) {
        return 1;
    }
}
main();