/*
    Escriba un programa que tome cada 4 horas la temperatura exterior, leyendola durante un periodo de 24 horas. Es decir, debe leer 6 temperaturas. Calcule la temperatura media del dia, la temperatura mas alta y la mas baja.


*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number>{
    try {
        let temperaturaAlta: number = 0;
        let temperaturaMedia: number[] = [];
        let temperaturaBaja: number = 100;
        let temperaturaEval: number = 0;
        let resultado: string = "";
        let horaAlta: number = 0;
        let horaBaja: number = 0;

        for (let i = 0, j = 0; i < 24; i += 4, j++) {
            temperaturaEval = parseInt(await askQuestion(`Digite la temperatura en °celcius para la hora ${i+4}: `));
            if (isNaN(temperaturaEval)) {
                console.log('digite un numero para la temperatura en °celcius');
                return 1;
            }else{
                if (temperaturaAlta < temperaturaEval) {
                    temperaturaAlta = temperaturaEval;
                    horaAlta = i+4;
                }
                if (temperaturaBaja > temperaturaEval) {
                    temperaturaBaja = temperaturaEval;
                    horaBaja = i+4;
                }
                temperaturaMedia[j] = temperaturaEval;
            }
        }

        let mediaCal: number = temperaturaMedia.reduce((element, current)=> element + current);

        resultado = `La temperatura mas alta registrada durante el dia fue a las ${horaAlta}hrs con un tope superior de ${temperaturaAlta}°celcius\nLa temperatura mas baja registrada durante el dia fue a las ${horaBaja}hrs con un tope inferior de ${temperaturaBaja}°celcius.\nLa temperatura media del dia fue de: ${(mediaCal / temperaturaMedia.length).toFixed(2)}grados celcius. `

        console.log(resultado);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();