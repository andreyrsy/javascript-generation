import readline from 'readline-sync';

let numerosPares = 0;
let numerosImpares = 0;

for(let i = 0; i < 10; i++){
    let input = readline.questionInt(`Digite o ${i+1} numero: `)

    if(input % 2 == 0){
        numerosPares++;
    }else{
        numerosImpares++;
    }
}
console.log(`Total de números pares: ${numerosPares}`)
console.log(`Total de números ímpares: ${numerosImpares}`)



