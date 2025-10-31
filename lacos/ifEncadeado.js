import readline from 'readline-sync';

let nota1, nota2, media;

nota1 =  readline.questionFloat("Digite a nota 1: ");
nota2 = readline.questionFloat("Digite a nota 2: ");

media = (nota1 + nota2) / 2;

if(media >= 6){
    console.log(`a media foi ${media} e voce foi aprovado!`)
}else if(media == 5){
    console.log(`a media foi ${media} e voce esta de exame!`)
}else{
    console.log("Reprovado!")
}