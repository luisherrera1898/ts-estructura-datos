/*
    Realice un programa que solicite al usuario que piense un numero entero entre el 1 y el 100.
    El progrma debe generar un numero aleatorio en ese mismo rango[1-100], e indicarle al usuario si el numero que digito es menor o mayor al numero aleatorio, asi hasta que lo adivine. y por ultimo mostrarle el numero de intentos que le llevo.
    
    1 . generamos ramdon entre 1 - 100
    variable ramdon = 1-100

    2. preguntamos al usuario cuanto es ramdon
    userdata = 1 - 100??

    3. si coincide return 0 de lo contrario

    4. userdata es mayor o menor que variable ramdon?
*/
const askQuestion = require('../utils/InteractuableConsole');

function numeroRamdon(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function main():Promise<number>{
    try {

        let randomNumber: number = numeroRamdon(1, 100);
        let userData:number = 0;

        for(let i:number = 0; userData !== randomNumber; i++){
            
            userData = parseInt(await askQuestion('Digite un numero entre el 1 y el 100: '));
            
            if (isNaN(userData)) {
                console.log('debe digitar numeros.');
                return 1;
            }
            if(userData > randomNumber){
                console.log('Usted digito un numero mayor que el generado. Intente con un numero mas bajo');
            }else if(userData < randomNumber){
                console.log('Usted digito un numero menor que el generado. Intente con un numero mas alto');
            }else{
                console.log(`El numero digitado concluye con el numero generado ${randomNumber} le tomo ${i} intentos para descubrirlo`);
            }
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();