function definirMatriz<T>(filas: number, columnas: number, fill:T): T[][] {
    return Array.from({ length: filas }, () => Array.from( { length: columnas }, ()  => fill ));
}

module.exports = definirMatriz;