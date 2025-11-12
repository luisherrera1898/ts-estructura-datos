/*
    En una clase de 5 alumnos se han realizado tres examenes y se requiere determinar el numero de: 

    a) Alumnos que aprobaron todos los examenes.
    b) Alumnos que aprobaron al menos un examen.
    c) Alumnos que aprobaron unicamente el ultimo ecamen.

    Realice un programa que permita la lectura de los datos y el calculo de las estadisticas

    1 10 10 10 todas +1 al menos +1
    2 10 1 1 al menos +1
    3 1 1 10 ultima +1 al menos +1
    4 10 10 10 todas + 1 al menos +1
    5 1 10 1 al menos +1
    todas 2
    al menos 5
    ultima 1
*/
const askQuestion = require('../utils/InteractuableConsole');
    
async function main():Promise<number>{
    try {
        let nota: number = 0;
        let aprobaronTodo: number = 0;
        let aprobaronUno: number = 0;
        let aprobaronUltimo: number = 0;
        
        for(let i: number = 0; i < 5; i++){
            console.log(`Alumno${i+1}.`);
            let pruebas: number = 0; // Reiniciamos las pruebas para cada estudiante
            let ultimoAprobado: boolean = false; // seguimiento con una bandera para los que solo pasaron el ultimo examen
            for (let j = 0; j < 3; j++) {
                nota = parseInt(await askQuestion(`Digite la nota del examen numero ${j+1} sobre 10: `));
                
                if (isNaN(nota) || nota < 1 || nota > 10) {
                    console.log('Digite un numero entre el 1 y el 10 para determinar su aprobacion.')
                    return 1;
                }else if(nota >= 5){
                    pruebas++;
                    if(j===2){
                        ultimoAprobado = true;
                    }
                }
                
            }
            if(pruebas === 3){
                aprobaronTodo++;
            }
            if(pruebas > 0){
                aprobaronUno++;
            }
            if (pruebas > 0 && pruebas === 1 && ultimoAprobado) {
                aprobaronUltimo++;
            }
        }
        console.log('Alumnos que pasaron todas las pruebas: '+aprobaronTodo);
        console.log('Alumnos que pasaron al menos una prueba: '+aprobaronUno);
        console.log('Alumnos que pasaron solo la ultima prueba: '+aprobaronUltimo);
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}
main();