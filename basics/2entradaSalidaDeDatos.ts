const askQuestion = require('../utils/InteractuableConsole') //

async function main(): Promise<number> {
    const userNumber = await askQuestion('Type a number: ');
    console.log('Number input was:', parseInt(userNumber));
    return 0 
}

main();