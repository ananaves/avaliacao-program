/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array. 
*/

const teclado = require(`prompt-sync`)();

let numeroPar : number [] = new Array(6);
let numero: number = 0;

for (let x = 0; x <= 5; x++){

    numero = parseInt(teclado(`digite o ${x+1}° numero: `));
    
    if(numero % 2 == 0 ){
        numeroPar[x] = numero;
    } 
    else{
        x--;
    }
 }

console.log(`os numeros pares são: ${numeroPar}`);