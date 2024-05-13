/*
2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1

*/

const {gets, print} = require('./funcoes_auxiliares2');

const quantidadeNumeros = gets();
let maiorPar = 0;
let menorImpar = 99999;

for (let index = 0; index < quantidadeNumeros; index++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorPar) {
            maiorPar = numero;
        }
    } else if (numero % 2 === 1) {
        if (numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorPar);
print('Menor número ímpar: ' + menorImpar);