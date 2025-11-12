/*
Realice un programa que lea de la entrada los isguientes datos de una persona

Edad dato de tipo entero.
sexo dato de tipo caracter.
altura en metros dato de tipo real.

Tras leer los datos, el programa debe mostrarlos en la salida estandar.
*/
const askQuestion = require('../utils/InteractuableConsole') //
async function main():Promise<number>{
    try{
        const edadStr = await askQuestion('¿Qué edad tiene? ');
        const sexoStr = await askQuestion('¿Cuál es su tipo de sexo? M/F ');
        const alturaStr = await askQuestion('¿Cuánto mide en altura (en metros)? ');

        const edad = parseInt(edadStr);
        const sexo = sexoStr.trim().toUpperCase()[0]; // M o F
        const altura = parseFloat(alturaStr);

        if (isNaN(edad) || edad <= 0) {
            console.log('Edad inválida. Debe ser un número entero positivo.');
            return 1;
        }

        if (sexo !== 'M' && sexo !== 'F') {
            console.log('Sexo inválido. Debe ser "M" o "F".');
            return 1;
        }

        if (isNaN(altura) || altura <= 0) {
            console.log('Altura inválida. Debe ser un número positivo.');
            return 1;
        }

        console.log('\n📋 Datos ingresados:');
        console.log(`Edad: ${edad} años`);
        console.log(`Sexo: ${sexo}`);
        console.log(`Altura: ${altura.toFixed(2)} metros`);

        return 0;

    }catch(error){
        console.error('error has ocurres, ', error);
        return 1;
    }
}

main();