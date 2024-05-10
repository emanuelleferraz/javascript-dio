/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    calculoGastoPercurso(distancia, precoCombustivel){
        return distancia * this.gastoCombustivel * precoCombustivel;
    }
}

const lamborghini = new Carro('Volkswagen', 'Preta', 1/10);
const gol = new Carro('Volkswagen', 'Branco', 1/12);

console.log('Gasto Total R$ ' + lamborghini.calculoGastoPercurso(200, 5.58));
console.log('Gasto Total R$ ' + gol.calculoGastoPercurso(200, 5.58));

