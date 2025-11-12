/*
    Hacer un programa que realice la serie fibonacci : 0 1 1 2 3 5 8 ... n
    0 anterior 1 actual = 1 resultado
    anterior 0 = 1 actual
    actual 1 = 1 resultado 
    r
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let numEval: number = parseInt(await askQuestion('cuantas veces desea realizar el fibonacci: ')) ;
        if (isNaN(numEval)) {
            console.log('digite un numero valido por favor.');
            return 1;
        }
        let anterior:number = 0;
        let actual:number = 1;
        let resultado:number = 0;
        let strFibon:string = `${anterior} ${actual} `;
        let i: number = 0;
        do{
            resultado = anterior + actual;
            anterior = actual;
            actual = resultado;
            strFibon += `${actual} `;
            i++;
        }while(i < numEval);

        console.log(strFibon);

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();

