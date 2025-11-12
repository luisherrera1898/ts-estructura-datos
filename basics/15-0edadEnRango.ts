/*
    Escriba un programa que solicite una edad (un entero) e indique en la salida estandar si la edad introducida esta en el rango [18 - 25].
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try{
        let numEval:number = parseInt(await askQuestion('Ingrese su edad: '));

        if(!isNaN(numEval) && (numEval >= 18 && numEval <= 25) ){ //bad practice but anyways is simple for now
            console.log('la edad que ha introducido es valida.');
        }else{
            console.log('su dato es invalido para el rango 18 - 25')
        }
        return 0;
    }catch(error){
        console.error(error);
        return 1;
    }
}

main();