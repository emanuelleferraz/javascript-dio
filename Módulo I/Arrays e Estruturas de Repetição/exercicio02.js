/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Números Pares: ');
for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero % 2 === 0) {
        console.log(numero);
    }   
}