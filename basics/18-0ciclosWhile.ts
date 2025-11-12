/*
    La sentencia while:

    while(expresion Logica){
        conjunto de instrucciones;
    }
        programa que escriba del 1 al 10 como ejemplo
*/
function main():number{
    let i: number = 0;
    while (i < 10) {
        console.log(i + 1);
        i++;
    }
    return 0;
}
main();