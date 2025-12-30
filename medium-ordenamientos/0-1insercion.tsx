/*
    Ordenamiento por Insercion
*/

function insercion(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];      // elemento a insertar
        let j = i - 1;

        // desplazar los mayores hacia la derecha
        while (j >= 0 && arr[j]! > key!) {
            arr[j + 1] = arr[j]!;
            j--;
        }
        // insertar en la posición correcta
        arr[j + 1]! = key!;
    }
    return arr;
}

let arr1: number[] = [10, 2, 3, 5, 7, 1, 2, 1234, 5, 15, 612, 412];
console.log(insercion(arr1)); 
// [1,2,2,3,5,5,7,10,15,412,612,1234]
