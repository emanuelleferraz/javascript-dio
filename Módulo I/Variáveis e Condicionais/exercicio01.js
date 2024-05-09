/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
    1. Preço do combustível;
    2. Gasto médio do combustível do carro por KM;
    3. Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.58;
const percorrePorLitro = 12;
const distancia = 200;

const gastoLitros = distancia / percorrePorLitro;
const gastoTotal = gastoLitros * precoCombustivel;

console.log('O gasto total da viagem é: R$ ' + gastoTotal.toFixed(2));



