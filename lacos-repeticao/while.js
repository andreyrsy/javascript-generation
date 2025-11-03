import readline from 'readline-sync';

let continua = true;
let cont = 0;

while(continua){
    
    console.log("Miauu ", ++cont)

    continua = readline.keyInYN("Quer continuar o exercicio?");
}