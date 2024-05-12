//Função gets e print

const entradas = [5, 50, 10, 98, 23];
let index = 0;

function gets(){
    const valor = entradas[index];
    index++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };

//module.exports.gets = gets;//também funcionaria