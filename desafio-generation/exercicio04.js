import readline from 'readline-sync';

let n1 = readline.questionInt("Digite o primeiro numero: ");
let n2 = readline.questionInt("Digite o segundo numero: ");
let n3 = readline.questionInt("Digite o terceiro numero: ");    
let n4 = readline.questionInt("Digite o quarto numero: ");

let diferenca = (n1 * n2) - (n3 * n4);

console.log("A diferenca é: " + diferenca)