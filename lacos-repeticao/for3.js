import readline from 'readline-sync';

let numero, contador;

numero = readline.questionInt("Calcule a tabuada do: ");

for(let contador = 0; contador <= 10; contador++){
    console.log(`${numero} x ${contador} = ${numero * contador}`)
}