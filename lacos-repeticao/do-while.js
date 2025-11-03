import readline from 'readline-sync';

let continua;
let senha, repetirSenha;

do{
    senha = readline.question("Digite sua senha: ")
    repetirSenha = readline.question("\nRepita sua senha: ")
    if(senha != repetirSenha){
        console.log("Senha inválida!")
        continua = true;
    }else{
        console.log("Bem vindo!")
        continua = false;
    }

}while(continua);
