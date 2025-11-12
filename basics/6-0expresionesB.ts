const askQuestion = require('../utils/InteractuableConsole');
/*
Escriba la siguiente expresion matematica como expresion: a + b/c / d + e / f
*/
const expresion = (a:number, b:number, c:number, d:number, e:number, f:number) => (a + (b / c)) / (d + (e / f));
async function main():Promise<number>{
    try {
        let userStr: string[] = [];
        for (let i = 0; i < 6; i++) {
            userStr[i] = await askQuestion('Digite el numero '+ i + ': ');
        }
        let data: number[] = userStr.map( (element) => parseFloat(element));
        if( data.length !== 6 || data.some(isNaN) ){
            console.log('Error: Invalid input values.');
            return 1;
        }else{
            console.log(expresion(data[0]!, data[1]!, data[2]!, data[3]!, data[4]!, data[5]!));
        }
        return 0;
    } catch (error) {
        console.error('An error has ocurred: ', error);
        return 1;
    }
}
main();