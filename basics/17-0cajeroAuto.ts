/*
    Hacer un programa que simule un cajero  automatico con un saldo inicial de 1000 Dólares.
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number> {
    try {
        let cuenta:number = 1000;
        let welcomeMsg: string = `Bienvenido al BankForReal. Usted posee ${cuenta} en dolares que desea realizar? \n1. retirar\n2. depositar\n3. invertir\n4. Recibir un pago`;
        console.log(welcomeMsg);
        let choice: number = parseFloat(await askQuestion('Digite la operacion que desea realizar: '));
        if(isNaN(choice) || (choice > 4 || choice < 1)){
            console.log('Digite una opcion valida.');
            return 1;
        }

        let change: number = 0;

        switch(choice){
            case 1: change = parseFloat(await askQuestion('Digite el monto que desea retirar: ')); cuenta -= change; break;
            case 2: change = parseFloat(await askQuestion('Digite el monto que desea depositar: ')); cuenta += change; break;
            case 3: change = parseFloat(await askQuestion('Digite el monto que desea invertir: ')); cuenta -= change; break;
            case 4: change = parseFloat(await askQuestion('Digite el monto que espera recibir: ')); cuenta += change; break;
        }

        console.log(`Su total en cuenta es para la fecha actual de: ${cuenta}`);

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();