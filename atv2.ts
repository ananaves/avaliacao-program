/*
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)

2º Função recebe 3 números e retorna o número menor (10 pontos)

3º Função recebe o valor maior e o valor menor e retorna 
a média desses números (10 pontos)

4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber a média do valor maior e menor
- exibir o número maior, o número menor e a média

*/

const teclado = require(`prompt-sync`)();

function nMaior(n1:number, n2:number, n3:number): number{
    let maiorN: number = 0;
    if ( n1>n2 && n1>n3){maiorN=n1}
    else if(n2>n1 && n2>n3){maiorN=n2}
    else if (n3>n1 && n3>n2){maiorN=n3}
    return maiorN;
}

function nMenor(n1:number, n2:number, n3:number): number{
    let menorN: number = 0;
    if ( n1<n2 && n1<n3){menorN=n1}
    else if(n2<n1 && n2<n3){menorN=n2}
    else if (n3<n1 && n3<n2){menorN=n3}
    return menorN;
}

function nMedia (n1:number, n2: number, n3: number){
    let soma = n1+n2+n3;
    let media= soma /3;
    return media;
}

let num1: number = parseInt(teclado(`digite o primeiro numero: `));
let num2: number = parseInt(teclado(`digite o segundo numero: `));
let num3: number = parseInt(teclado(`digite o terceiro numero: `));

console.log(`o maior numero é ${nMaior(num1,num2,num3)}, o menor numero é ${nMenor(num1,num2,num3)} 
e a media desses numeros é ${nMedia(num1,num2,num3)} `);