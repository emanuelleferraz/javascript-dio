const entrada = [2000, 250];
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