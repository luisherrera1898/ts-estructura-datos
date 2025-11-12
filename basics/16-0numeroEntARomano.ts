/*
    Escribir un programa que lea un valor entero y lo transforme a numero romano
    M = 1000
    D = 500
    C = 100
    L = 50
    X = 10
    V = 5
    I = 1
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let unidad: number = 0, decena: number = 0, centena: number = 0, unidadMil: number = 0
        let numEval:number = parseFloat(await askQuestion('Digite un numero para transformarlo en notacion romana: '));
        if(isNaN(numEval)){
            console.log('Asegurese de digitar un numero. ');
            return 1;
        }

        if (numEval < 1 || numEval > 3999) {
            console.log('El numero debe estar entre 1 y 3999.');
            return 1;
        }

        // 2152 2000 100 50 2
        unidad = numEval % 10;      numEval = Math.trunc(numEval / 10);
        decena = numEval % 10;      numEval = Math.trunc(numEval / 10);
        centena = numEval % 10;     numEval = Math.trunc(numEval / 10);
        unidadMil = numEval % 10;   numEval = Math.trunc(numEval / 10);

        let romano:string = "";

        switch (unidadMil) {
            case 1: romano += 'M'; break;
            case 2: romano += 'MM'; break;
            case 3: romano += 'MMM'; break;
        }

        switch (centena) {
            case 1: romano += 'C'; break;
            case 2: romano += 'CC'; break;
            case 3: romano += 'CCC'; break;
            case 4: romano += 'CD'; break;
            case 5: romano += 'D'; break;
            case 6: romano += 'DC'; break;
            case 7: romano += 'DCC'; break;
            case 8: romano += 'DCCC'; break;
            case 9: romano += 'CM'; break;
        }

        switch (decena) {
            case 1: romano += 'X'; break;
            case 2: romano += 'XX'; break;
            case 3: romano += 'XXX'; break;
            case 4: romano += 'XL'; break;
            case 5: romano += 'L'; break;
            case 6: romano += 'LX'; break;
            case 7: romano += 'LXX'; break;
            case 8: romano += 'LXXX'; break;
            case 9: romano += 'XC'; break;
        }

        switch (unidad) {
            case 1: romano += 'I'; break;
            case 2: romano += 'II'; break;
            case 3: romano += 'III'; break;
            case 4: romano += 'IV'; break;
            case 5: romano += 'V'; break;
            case 6: romano += 'VI'; break;
            case 7: romano += 'VII'; break;
            case 8: romano += 'VIII'; break;
            case 9: romano += 'IX'; break;
        }

        console.log(romano);

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }

}
main();