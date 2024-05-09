/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1. Preço do etanol;
    2. Preço da gasolina;
    3. O tipo de combustível que está no seu carro;
    4. Gasto médio de combustível por KM;
    5. Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 4.79;
const precoGasolina = 5.58;
const ehGasolina = true;
const kmPorLitro = 10;
const distancia = 200;
const consumoLitro = distancia / kmPorLitro;

if (ehGasolina) {
    const gastoTotal = consumoLitro * precoGasolina
    console.log('O gasto total será de: R$ ' + gastoTotal.toFixed(2)); 
} else {
    gastoTotal = consumoLitro * precoEtanol;
    console.log('O gasto total será de: R$ ' + gastoTotal.toFixed(2));
}