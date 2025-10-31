import readline from 'readline-sync';

let salario = readline.questionInt("Digite o salario: ")

let abono = readline.questionInt("Digite o abono: ")

let novoSalario = salario + abono;

console.log("O novo salario é: " + novoSalario);