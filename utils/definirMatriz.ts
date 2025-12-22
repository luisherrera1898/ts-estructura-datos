type Matriz = (number | null | string)[][];
function definirMatriz(filas: number, columnas: number, fill:number | null | string): Matriz{
    const matriz: Matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = []
        for (let j = 0; j < columnas; j++) {
            matriz[i]![j] = fill;
        }
    }
    return matriz;
}

module.exports = definirMatriz;