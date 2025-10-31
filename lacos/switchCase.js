import readline from 'readline-sync';

let opcao;

console.log(" ## MENU ## ")
console.log("\nDigite 1 para ver Indicação de um Livro--")
console.log("Digite 2 para ler uma frase motivacional")
console.log("Digite 3 para receber uma indicacao de musica")

opcao = readline.questionInt();
switch(opcao){
    case 1:
        let validacao = readline.question("Voce realmente gosta de livros? s/n ").toLowerCase();
        if(validacao === "s"){
            console.log("Livro: O Alquimista")
        }else{
            console.log("Sem livro para você!")
        }
        break;
    case 2:
        console.log("Frase Motivacional: \"Acredite em si mesmo e em tudo que você pode fazer.\" - Roy T. Bennett")
        break;
    case 3:
        console.log("Musica: \"Canción de la primavera\" - Luis Fonsi")
        break;
    default:
        console.log("Opção inválida!")
}