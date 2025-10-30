import readline from 'readline-sync';

let salarioBruto = readline.questionInt("Digite o salario bruto: ");
let adicionalNoturno = readline.questionInt("Digite o adicional noturno: ");
let horasExtras = readline.questionInt("Digite as horas extras: ");
let descontos = readline.questionInt("Digite os descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos;

console.log("O salario bruto é: " + salarioLiquido)

