//Variável Boolean e Condicionais Simples

// const camisaAzulJorge = true;
// const camisaAzulAmanda = false;

const numero = 15;
const numeroDivisivel = numero % 5 == 0;

if (numero === 0){
    console.log('O número é invalido!');

} else if (numeroDivisivel) {
    console.log('Sim');

} else {
    console.log('Não');
}
