const askQuestion = require('../utils/InteractuableConsole');

async function rellenarMatriz<T>(matriz: T[][]): Promise<T[][]> {
  for (let i = 0; i < matriz.length; i++) {
    if (!matriz[i]) continue;

    for (let j = 0; j < matriz[i]!.length; j++) {
      const respuesta = await askQuestion(
        `Digite un valor para la posición ${j + 1} de la fila ${i + 1}: `
      );

      if (!isNaN(Number(respuesta) )) {
        matriz[i]![j] = Number(respuesta) as T;
      } else {
        matriz[i]![j] = respuesta as T;
      }
    }
  }
  return matriz;
}

module.exports = rellenarMatriz;