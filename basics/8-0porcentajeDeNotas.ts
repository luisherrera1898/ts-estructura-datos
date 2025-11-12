const askQuestion = require('../utils/InteractuableConsole');
/*
La calificacion final de un estudiante es la media ponderada de tres notas:
La nota de practicas que cuenta un 30% del total, la nota teorica que cuenta un 60% y la nota de participacion que cuenta el 10% restante. Escriba un programa que lea de la entrada estandar las tres notas de un alumno y escriba en la salida estandar su nota final.
*/
const expresion = (practica: number, teorica:number, participacion: number) => {
    practica = practica * 0.60;
    teorica = teorica * 0.30;
    participacion = participacion * 0.10;
    const resultado = practica + teorica  + participacion;
    return resultado;
}

async function main():Promise<number> {
    try {
        let notaPracticaStr: string         = await askQuestion('Digite su nota de practica: ');
        let notaTeoricaStr: string          = await askQuestion('Digite su nota de teoria: ');
        let notaParticipacionStr: string    = await askQuestion('Digite su nota de participacion: ');
        let notasAlumnoStr: string[] = [notaPracticaStr, notaTeoricaStr, notaParticipacionStr];
        let notasAlumnoData: number[] = notasAlumnoStr.map( (element)=> parseFloat(element) );
        
        for (let i = 0; i < notasAlumnoData.length; i++) {
            if(notasAlumnoData[i] === undefined || isNaN(notasAlumnoData[i]!)){
                console.log('Error: invalid input.');
                break;
            }
        }

        let notaFinal:number = expresion(notasAlumnoData[0]!, notasAlumnoData[1]!, notasAlumnoData[2]!);
        //practica should be [0] for 92 === 55,2
        //teorica should be [1] for 88 === 26,4
        //participacion should be [2] for 24 === 2,4
        //total must output 55.2 + 26.4 + 2.4 === 84
        notaFinal = parseFloat(notaFinal.toFixed(2));
        console.log(notaFinal);
        
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();