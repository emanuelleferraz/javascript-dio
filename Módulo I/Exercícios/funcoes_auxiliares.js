const entrada = [5.5];
let index = 0;

function gets(){
    const valor = entrada[index];
    index++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };