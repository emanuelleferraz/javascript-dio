//Classes (Definição) e Instâncias (Ocorrência)
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/*const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 23;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(renan);
console.log(vitor);

vitor.descrever();
renan.descrever();

const vitor = new Pessoa('Vitor J Guerra', 25);
const renan = new Pessoa('Renan J Paula', 30);

console.log(vitor);
*/

//Funções recebendo objetos
function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);