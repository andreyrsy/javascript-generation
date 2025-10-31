import readline from 'readline-sync';

let saldo = 1000.00;

let opcao = readline.questionFloat("\nDigite a opcao desejada:\n1 - Consultar saldo \n2 - Sacar\n3 - Depositar\nOpcao: ");

switch(opcao){
    case 1:
            console.log(`Saldo: R$${saldo}`)
        break;
    case 2:
        let saque = readline.questionFloat("Valor saque: ")
        if(saldo > saque){
            var saldoLiquido = saldo -= saque;
            console.log(`Novo saldo: ${saldoLiquido}`)
        }
        break;
    case 3:
        let deposito = readline.questionFloat("Valor deposito: ");
        if(deposito > 0){
            var saldoLiquido = saldo += deposito;
            console.log(`Novo saldo: R$${saldoLiquido}`);
        }
        break;
    default:
        console.log("Operação inválida!")
        break;
}