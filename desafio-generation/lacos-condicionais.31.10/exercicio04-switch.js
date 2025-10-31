import readline, { keyIn } from 'readline-sync';

let colaborador = readline.question("Nome do colaborador: ")
let cargo = readline.questionInt("Cargo: ")
let salario = readline.questionInt("Salario: ")

console.log("Nome do colaborador: " + colaborador)
switch(cargo){
    case 1:
        console.log("Cargo: Gerente")
        var reajuste = (salario * 0.10)
        console.log("Salário: R$", salario + reajuste)
        break;
    case 2:
        console.log("Cargo: Vendedor")
        var reajuste = (salario * 0.07)
        console.log("Salário: R$", salario + reajuste)
        break;
    case 3:
        console.log("Cargo: Supervisor")
        var reajuste = (salario * 0.09)
        console.log("Salário: R$", salario + reajuste)
        break;
    case 4:
        console.log("Cargo: Motorista")
        var reajuste = (salario * 0.06)
        console.log("Salário: R$", salario + reajuste)
        break;
    case 5:
        console.log("Cargo: Estoquista")
        var reajuste = (salario * 0.05)
        console.log("Salário: R$", salario + reajuste)
        break;
    case 6:
        console.log("Cargo: Técnico de TI")
        var reajuste = (salario * 0.08)
        console.log("Salário: R$", salario + reajuste)
        break;
}