import readline from 'readline-sync';

let primeiraNota = readline.questionInt("Digite a primeira nota: ");
let segundaNota = readline.questionInt("Digite a segunda nota: ");
let terceiraNota = readline.questionInt("Digite a terceira nota: ");
let quartaNota = readline.questionInt("Digite a quarta nota: ");

let media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4;


console.log(`A média é: ${media}`);