/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um numero
de 1-100. Faça um programa que receba os 5 números sorteados para
os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23
*/
const {gets, print} = require('./funcoesAuxiliares');

// const numerosSorteados = [];

// for (let index = 0; index < 5; index++) {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);
    
// }

// let maiorNumero = 0;
// for (let index = 0; index < numerosSorteados.length; index++) {
//     const numeroSorteado = numerosSorteados[index];
//     if (numeroSorteado > maiorNumero) {
//         maiorNumero = numeroSorteado;
//     }
    
// }

//Simplificando
const quantidadeAlunos = gets();
let maiorNumero = 0;

for (let index = 0; index < quantidadeAlunos; index++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorNumero) {
        maiorNumero = numerosSorteado;
    }
    
}

print(maiorNumero);

