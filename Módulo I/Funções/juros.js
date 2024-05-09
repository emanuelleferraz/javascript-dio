function aplicarDesconto(valorProduto, desconto){
    return valorProduto - (valorProduto * (desconto/100));
}

function aplicarJuros(valorProduto, juros){
    return valorProduto + (valorProduto * (juros/100));
}

function main(){
    const valorProduto = 100;
    const condicaoPagamento = 3;

    if (condicaoPagamento === 1) {
        console.log('Valor a pagar: R$ ' + aplicarDesconto(valorProduto, 10));
    
    } else if (condicaoPagamento === 2) {
        console.log('Valor a pagar: R$ ' + aplicarDesconto(valorProduto, 15));
    
    } else if (condicaoPagamento === 3) {
        console.log('Valor a pagar: R$ ' + aplicarJuros(valorProduto, 10));
    } else {
        console.log('Valor a pagar: R$ ' + valorProduto);
    }

}
main();