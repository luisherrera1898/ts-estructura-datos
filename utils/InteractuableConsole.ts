const readline = require('readline');

function askQuestion(query:string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(query, (ans: string) => {
      rl.close();
      resolve(ans);
    });
  });
}

module.exports = askQuestion;