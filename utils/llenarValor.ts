const askQuestion = require('./InteractuableConsole');

async function llenarValor() {
    const value = await askQuestion('Digite su value: ');
    if (!value){
        console.log('No ha digitado nada');
        return 1;
    }

    return value;
}

module.exports = llenarValor;