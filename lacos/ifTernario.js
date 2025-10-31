import readline from 'readline-sync';

let nota1 = readline.questionFloat("Digite a nota 1: ");
let nota2 = readline.questionFloat("Digite a nota 2: ");

let media = (nota1 + nota2) / 2;

console.log((media >=6) ? `Aprovado com media: ${media}`: `Reprovado com media: ${media}`)