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
var teclado = require("prompt-sync")();
function nMaior(n1, n2, n3) {
    var maiorN = 0;
    if (n1 > n2 && n1 > n3) {
        maiorN = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        maiorN = n2;
    }
    else if (n3 > n1 && n3 > n2) {
        maiorN = n3;
    }
    return maiorN;
}
function nMenor(n1, n2, n3) {
    var menorN = 0;
    if (n1 < n2 && n1 < n3) {
        menorN = n1;
    }
    else if (n2 < n1 && n2 < n3) {
        menorN = n2;
    }
    else if (n3 < n1 && n3 < n2) {
        menorN = n3;
    }
    return menorN;
}
function nMedia(n1, n2, n3) {
    var soma = n1 + n2 + n3;
    var media = soma / 3;
    return media;
}
var num1 = parseInt(teclado("digite o primeiro numero: "));
var num2 = parseInt(teclado("digite o segundo numero: "));
var num3 = parseInt(teclado("digite o terceiro numero: "));
console.log("o maior numero \u00E9 " + nMaior(num1, num2, num3) + ", o menor numero \u00E9 " + nMenor(num1, num2, num3) + " \ne a media desses numeros \u00E9 " + nMedia(num1, num2, num3) + " ");
