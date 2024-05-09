//Exemplos
//Chamando função em outra função
function escreverNome(nome){
    return 'Meu nome é ' + nome + ' e sou ';
}

function verificarMaioridade(idade){
    if (idade >= 18) {
        console.log(escreverNome('Joana') + 'Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}


verificarMaioridade(23);
