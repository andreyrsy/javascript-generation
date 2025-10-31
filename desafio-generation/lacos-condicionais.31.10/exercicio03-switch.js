import readline from 'readline-sync';

let codigo = readline.questionInt("Digite o codigo do produto: ")
let quantidade = readline.questionInt("Digite a quantidade: ")

switch(codigo){
    case 1:
        console.log("Produto: Cachorro quente.\nValor Total: R$", quantidade * 10)
        break;
    case 2:
        console.log("Produto: X SALADA.\nValor Total: R$", quantidade * 15)
        break;

    case 3:
        console.log("Produto: X BACON.\nValor Total: R$", quantidade * 18)
        break;
    case 4:
        console.log("Produto: Bauru\nValor Total: R$", quantidade * 12)
        break;
    case 5:
        console.log("Produto: Refrigerante\nValor Total: R$", quantidade * 8)
        break;
    case 6:
        console.log("Produto: Suco de Laranja\nValor Total: R$", quantidade * 13)
        break;
}