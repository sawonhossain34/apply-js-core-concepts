function factoriaDebug(number){
let factoria = 1;
for(i = 1; i <number ; i++){
    factoria = factoria *number;
}
return factoria;
}

const factoria = factoriaDebug(3);
console.log(factoria);