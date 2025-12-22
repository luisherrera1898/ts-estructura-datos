const askQuestion = require('./InteractuableConsole');

async function rellenarMatriz<T>(
  matriz: T[][]
): Promise<T[][]> {
  for (let i = 0; i < matriz.length; i++) {
    const row = matriz[i];
    if (!row) continue;
    for (let j = 0; j < row.length; j++) {
      let respuesta = await askQuestion(`Digite un valor para la posición ${j+1} de la fila ${i+1}: `);

      if (typeof row[j] === "number") {
        row[j] = Number(respuesta) as T;
      } else {
        row[j] = respuesta as T;
      }
    }
  }
  return matriz;
}

module.exports = rellenarMatriz;
