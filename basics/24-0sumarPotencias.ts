/* 
    Escriba un programa que calcule el valor de: 2▲1+2▲2+2▲3+...2▲n;
*/

const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let potencia: number = parseInt(await askQuestion('Digite el numero al cual desea calcular su factorial: '));
        let resultado: number = 0;
        let acumulador: number = 0;
        // 2 4 8 16 32 62
        if(isNaN(potencia)){
            console.log('Digite un valor valido.');
            return 1;
        }else{
            
            for(let i:number = 1; i <= potencia; i++){
                resultado = Math.pow(2, i);
                acumulador += resultado;
            }
        }
        console.log(acumulador);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();

