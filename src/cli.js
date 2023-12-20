import readlineSync from 'readline-sync';

function askNameUser () {
   const name = readlineSync.question('May I have your name? ');
   console.log(`Hello, ${name}!`);
}

export {askNameUser};
