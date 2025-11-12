const askQuestion = require('../utils/InteractuableConsole');

const expresion =  (a:number, b:number, c:number, d:number):number => (a+b) / (c+d)

async function main():Promise<number> {
    try{
        let aStr:string = await askQuestion('digite el valor de la variable a: '),
            bStr:string = await askQuestion('digite el valor de la variable b: '),
            cStr:string = await askQuestion('digite el valor de la variable c: '),
            dStr:string = await askQuestion('digite el valor de la variable d: ');
            
        let userStr: string[] = [aStr, bStr, cStr, dStr];
        let data: number[] = userStr.map( (element) => parseFloat(element)); //map returns somethin assignable to number[], foreach always return void...
        if (data.length > 4 || data.some(isNaN) || data.some( (element) => element === undefined)){
            console.log('Error: Invalid input values.');
            return 1;
        }else{
            console.log(expresion(data[0]!, data[1]!, data[2]!, data[3]!));
        }
        return 0;
    }catch(error){
        console.error('An error has ocurred: ',error)
        return 1;
    }
}
main();