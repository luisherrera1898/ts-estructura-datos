const askQuestion = require('../utils/InteractuableConsole');
/*Escriba un ejemplo de condicionales simples para determinar si una entrada de dato es de tipo string, number o boolean*/

async function main():Promise<number> {
    try {
        let userData: string = await askQuestion('Digite un dato para verificar su tipo, si no digita nada contara como un espacio en blanco: ');
        userData = userData.toLowerCase();
        let bol: boolean = false;
        let num: number = parseFloat(userData);
        
        if(!isNaN(num) || num === null){
            console.log(typeof(num));
        }else if(userData === 'true' || userData=== 'false'){
            bol = userData === 'true';
            console.log(typeof(bol));
            return 0;
        }else{
            console.log(typeof(userData));
        }
        //1 number ✔️
        //a character ✔️
        //false boolean ✔️
        // " " string ✔️
        // undefined or null


        return 0;
    } catch (error) {
        console.error(error)
        return 1;
    }
}

main();