/*
    Mostrar los meses del año, pidiendole al usuario un numero entre (1-12), y mostrar el mes al que corresponde.
*/
const askQuestion = require('../utils/InteractuableConsole');

async function main():Promise<number> {
    try {
        let numEval: number = parseFloat(await askQuestion('Digite un numero entre el 1 y el 12: '));
        if(isNaN(numEval)){
            console.log('digite un numero entre el 1 y el 12.');
            return 1;
        }

        if(numEval < 1 || numEval > 12){
            console.log('digite un numero entre el 1 y el 12.');
            return 1;
        }
        let mesResultante: string = "";
        switch(numEval){
            case 1:     mesResultante += "Enero";       break;
            case 2:     mesResultante += "Febrero";     break;
            case 3:     mesResultante += "Marzo";       break;
            case 4:     mesResultante += "Abril";       break;
            case 5:     mesResultante += "Mayo";        break;
            case 6:     mesResultante += "Junio";       break;
            case 7:     mesResultante += "Julio";       break;
            case 8:     mesResultante += "Agosto";      break;
            case 9:     mesResultante += "Septiembre";  break;
            case 10:    mesResultante += "Octubre";     break;
            case 11:    mesResultante += "Noviembre";   break;
            case 12:    mesResultante += "Diciembre";   break;
        }
        console.log(`Usted ha seleccionado el mes: ${mesResultante}`);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();