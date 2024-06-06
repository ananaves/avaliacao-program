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

const teclado = require(`prompt-sync`)();

function media(n1: number, n2: number, n3: number, n4: number, n5: number) {
    let media: number = (n1 + n2 + n3 + n4 + n5) / 5
    return media;
}

function parImp(media: number):string {
    let resultado: string = ``;
    if (media % 2 == 0) {
        resultado =  `P`;
    }
    else {
        resultado =  `I`;
    }

    return resultado;
}

function principal() {
    let num1: number = parseInt(teclado(`digite o primeiro numero: `));
    let num2: number = parseInt(teclado(`digite o segundo numero: `));
    let num3: number = parseInt(teclado(`digite o terceiro numero: `));
    let num4: number = parseInt(teclado(`digite o quarto numero: `));
    let num5: number = parseInt(teclado(`digite o quinto numero: `));

    let mediaCalculada:number = media(num1,num2,num3,num4,num5);
    let resultado: string = parImp(mediaCalculada);

    console.log(`A média desses números é ${mediaCalculada} e esse número é ${resultado}`);
}

principal();