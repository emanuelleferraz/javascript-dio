/*
3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00
*/

const {gets, print} = require('./funcoes_auxiliares3');

const salarioBruto = gets();
const beneficios = gets();

// if (salarioBruto > 0 && salarioBruto < 1100) {
    
//     const salarioTotal = salarioBruto * 0.95 + beneficios; 
//     print(salarioTotal);
    
// } else if (salarioBruto >= 1100 && salarioBruto < 2500) {

//     salarioTotal = salarioBruto * 0.90 + beneficios;
//     print(salarioTotal);

// } else if (salarioBruto > 2500) {

//     salarioTotal = salarioBruto * 0.85 + beneficios;
//     print(salarioTotal);
// }

//Com função
function calcularImposto(salario){
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;

    } else if(salario >= 1100.01 && salario <= 2500){
        aliquota = 0.10;
        
    } else if(salario > 2500){
        aliquota = 0.15;
    }
    return aliquota * salario;
      
}
const valorImposto = calcularImposto(salarioBruto);
const saida = salarioBruto - valorImposto + beneficios;
print(saida.toFixed(2));
