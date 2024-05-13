const entrada = [5, 3, 4, 1, 8, 10];
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