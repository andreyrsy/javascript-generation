import readline from 'readline-sync';

let nomeDoador = readline.question("Digite o nome do doador: ");
let idadeDoador = readline.questionInt("Digite a idade do doador: ");
let primeiraDoacao = readline.question("Primeira doacao(s/n): ");

if(idadeDoador >= 18 && idadeDoador < 60){
    console.log(`O doador ${nomeDoador} de ${idadeDoador} anos está apto a doar sangue.`)
}else if(idadeDoador >= 60 && idadeDoador <= 69 && primeiraDoacao === "n"){
    console.log(`O doador ${nomeDoador} de ${idadeDoador} anos está apto a doar sangue.`)
}else {
    console.log(`O doador ${nomeDoador} de ${idadeDoador} anos não está apto a doar sangue.`)
}