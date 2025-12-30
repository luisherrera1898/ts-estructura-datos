/*
    Es un sencillo algoritmo de ordenamiento. Funciona revisando cada elemento de la lista que va a ser ordenado con el siguiente intercambiandolos de posicion si estan en el orden equivocado. Es necesario revisar varias veces toda la lista hasta que no se necesiten mas intercambio, lo cual significa que la lista esta ordenada
    los menos suben en la posicion los mayores bajan
*/
function burbuja(arr: number[]): number[] {
    const arrayLarge = arr.length;
    let swap: boolean;
    do {
        swap = false;
        for (let i = 0; i < arrayLarge - 1; i++) {
            if (arr[i]! > arr[i + 1]!) { // ascendente
                const temporal = arr[i]!;
                arr[i] = arr[i + 1]!;
                arr[i + 1] = temporal;
                swap = true;
            }
        }
    } while (swap);
    return arr;
}

let ejemplo = [4, 5, 2, 1, 3];
console.log(burbuja(ejemplo));
