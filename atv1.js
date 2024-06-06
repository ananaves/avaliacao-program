/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
   o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar

*/
var teclado = require("prompt-sync")();
function Media(n1, n2, n3, n4, n5) {
    var soma = n1 + n2 + n3 + n4 + n5;
    var media = soma / 5;
    return media;
}
function verificaPouI(Media) {
    var resto = Media / 2;
    if (resto == 0) {
        console.log("o resultado da m\u00E9dia \u00E9 um numero Par!");
    }
    ;
    if (resto == 1) {
        console.log("o resultado da m\u00E9dia \u00E9 um n\u00FAmero Impar!");
    }
    ;
    return resto;
}
function principal() {
    var numeros = 0;
    for (var x = 0; x < 5; x++) {
        var numero = parseFloat(teclado("Digite o " + (x + 1) + "\u00B0 n\u00FAmero : "));
        console.log("o valor da m\u00E9dia dos numeros \u00E9 " + Media + " e o n\u00FAmero \u00E9 " + verificaPouI);
    }
}
