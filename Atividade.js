const read = require('readline-sync');
console.log("Este programa calcula a regra de 3\nComo mostra no exemplo:");
console.log("a ------- b");
console.log("c ------- x");''
let a = read.question("Digite o valor de a:\n");
let b = read.question("Digite o valor de b:\n");
let c = read.question("Digite o valor de c:\n");
console.log( a," ------- ",b);
console.log(c," ------- x");
console.log("O valor de x é",c*b/a);
