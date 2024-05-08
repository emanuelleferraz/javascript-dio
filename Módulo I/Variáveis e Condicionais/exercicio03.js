/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um 
semestre da faculdade, calcule e imprima a sua média e a sua
classificaçã conforme a tabela abaixo.

Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Media acima de 7, passou de semestre;
*/

const nota1 = 5.5;
const nota2 = 6.5;
const nota3 = 7.9;

const mediaNotas = (nota1 + nota2 + nota3) / 3;
console.log('A média é: ' + mediaNotas.toFixed(2));

if (mediaNotas < 5){
    console.log('Reprovado');
} else if (mediaNotas >= 5 && mediaNotas <= 7) {
    console.log('Recuperação');
} else if (mediaNotas > 7) {
    console.log('Aprovado');
}

