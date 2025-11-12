const askQuestion = require('../utils/InteractuableConsole');
/*
Escriba un programa que lea la nota final de cuatro alumnos y calcule la nota final media de los cuatro alumnos.
*/

async function main():Promise<number> {
    try {
        let alumnosStr:string[] = [];
        for (let i = 0; i < 4; i++) {
            alumnosStr[i] = await askQuestion(`digite la nota final del alumno ${i+1} `);
        }
        let alumnos:number[] = alumnosStr.map( (element)=> parseFloat(element));
        if (alumnos.length > 4 || alumnos.some(isNaN)) {
            console.log('Error: invalid inputs');
        }else{
            let resultado:number = 0;
            resultado = alumnos.reduce( (element, actualElement) =>  element + actualElement / alumnos.length, 0);
            console.log(resultado);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();