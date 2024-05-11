/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = 5;

for (let index = 1; index <= 10; index++) {
    const tabuada = numero * index;
    console.log(`${numero} x ${index} = ` + tabuada);
}

