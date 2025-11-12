const askQuestion = require('../utils/InteractuableConsole');
/*
Escriba un programa que lea de la entrada estandar los dos catetos de un triangulo rectangulo y escriba en la salida estandar su hipotenusa
*/
const expresion = (catetoA: string | number, catetoB: string | number):number =>{
    const catA = typeof catetoA === 'string' ? parseFloat(catetoA) : catetoA;
    const catB = typeof catetoB === 'string' ? parseFloat(catetoB) : catetoB;
    if( (catA === null || isNaN(catA)) || (catB === null || isNaN(catB)) ){
        console.log('Error: Invalid input');
        return 1;
    }
    const resultado = Math.sqrt( (catA * catA) + (catB * catB) );
    return resultado;
}

async function main():Promise<number> {
    try {
        let catetoAStr:string = await askQuestion('Digite el valor para el cateto A: ');
        let catetoBStr:string = await askQuestion('Digite el valor para el cateto B: ');
        let hipotenusa = expresion(catetoAStr, catetoBStr);
        hipotenusa = parseFloat(hipotenusa.toFixed(2));
        console.log(hipotenusa);

        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

main();