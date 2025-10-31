var escopoGlobal = "fora do if";
let escopoLocal;
if(true){
    escopoLocal = "dentro do if";
    console.log(escopoLocal)
}

console.log(escopoGlobal)
console.log(escopoLocal)

