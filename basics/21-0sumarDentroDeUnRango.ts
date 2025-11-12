/*
    Escribe un programa que lea valores enteros hasta que se introduzca un valor en el rango [20 - 30] o se introduzca el valor 0. El programa debe entregar la suma de los valores mayores a 0 introducidos
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let numToSave: number = 0;
        let numSaved: number[] = [];
        let i: number = 0;
        do{
            numToSave = parseInt(await askQuestion('Digite un numero. Recuerde que el 0 y los valores entre el rango de [20 - 30], detendran el programa: '));
            if(isNaN(numToSave)){
                console.log('Por favor introducir un numero.');
                return 1;
            }else{
                numSaved[i] = numToSave;
                i++;
            }
        }while((numToSave !== 0) && (numToSave < 20 || numToSave > 30));

        let mayoresACero: number[] = numSaved.filter( (element)=> element > 0); //filtramos el arreglo a todos los elementos que cumplen la condicion

        let resultado: number = mayoresACero.reduce( (preElement, currElement)=> preElement + currElement); //sumamos los elementos que cumplieron la condicion
        
        console.log(resultado);

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();