var teclado = require("prompt-sync")();
var numeroPar = new Array(6);
var numero = 0;
for (var x = 0; x <= 5; x++) {
    numero = parseInt(teclado("digite o " + (x + 1) + "\u00B0 numero: "));
    numeroPar[x] = numero;
    if (numero / 2 == 0) {
        numeroPar;
    }
}
console.log("os numeros pares s\u00E3o: " + numeroPar);
