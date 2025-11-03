import readline from 'readline-sync';

const cadastro = [];

for(let i = 0; i < 5; i++){

    let nome = readline.question("Digite seu nome: ");
    let idade = readline.questionInt("Digite sua idade: ");

    cadastro[i] = {nome, idade}

}  

console.log(cadastro)
