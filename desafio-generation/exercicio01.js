import readline from 'readline-sync'

let salario = parseFloat(readline.question("Digite o Salário: "));
let abono = parseFloat(readline.question("Digite o Abono: "));
let novoSalario = salario + abono;
console.log("Novo Salário: " + novoSalario.toFixed(2));