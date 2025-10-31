import readline from 'readline-sync';

let input = readline.questionInt("Digite um numero: ");

if(input % 2 === 0){
    if(input > 0){
        console.log(`O número ${input} é par e positivo.`)
    }else{
        console.log(`O número ${input} é par e negativo.`)
    }
}else{
    if(input > 0){
        console.log(`O número ${input} é ímpar e positivo.`)
    }else{
        console.log(`O número ${input} é ímpar e negativo.`)
    }
}
