/*
    Escribe un programa que calcule y muestre en la salida estandar la suma de los cuadrados de los 10 primeros enteros mayores que cero,

    1cuadrado + 2 cuadrado + ncuadrado + 10cuadrado = ?
*/

async function main(){
    let resultado: number = 0;
    let stringResultado: string = "";

    for(let i:number = 0; i < 10; i++){
        
        resultado += Math.pow((i+1), 2);

        if(i == 9){
            stringResultado += `${i+1} al cuadrado, da como resultado: ${resultado}`;
        }else{
            stringResultado += `${i+1} al cuadrado + \n`;
        }
    }
    console.log(stringResultado);
    return 0;
}

main();