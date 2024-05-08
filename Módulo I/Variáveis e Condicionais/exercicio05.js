/*
Elabore um algoritmo que calcule o que deve ser pago por um produto
considerando o preço normal de etiqueta e a escolha da condição de
pagamento.

Utilize os códigos de tabela a seguir para ler qual a condição de 
pagamento escolhida e efetuar o cálculo adequado

Código  Condição de pagamento
    À vista Débito recebe 10% de desconto;
    À vista no Dinheiro ou PIX, recebe 15% de desconto;
    Em duas vezes, preço normal de etiqueta sem juros;
    Acima de duas vezes preço normal de etiqueta mais juros 10%
*/

const produto = 110;
const condicaoPagamento = 3;

if (condicaoPagamento === 1) {
    const totalProduto = produto * 0.90;
    console.log('Valor a pagar: R$ ' + totalProduto.toFixed(2));

} else if (condicaoPagamento === 2) {
    totalProduto = produto * 0.85;
    console.log('Valor a pagar: R$ ' + totalProduto.toFixed(2));

} else if (condicaoPagamento === 3) {
    totalProduto = produto + ((produto * 10) / 100);
    console.log('Valor a pagar: R$ ' + totalProduto.toFixed(2));
} else {
    console.log('Valor a pagar: R$ ' + produto);
}