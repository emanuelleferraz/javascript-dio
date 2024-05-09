//Funções

function incrementaJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

function main(){
    console.log(incrementaJuros(100, 10));
}

main();