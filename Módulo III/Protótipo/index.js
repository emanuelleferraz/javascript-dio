//Orientação a Protótipo

//Herança em JS
const pessoa = {
    genero: 'masculino'
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa //renan extend pessoa
}

// console.log(renan.genero)

//Classes em JS são chamadas de funções construtoras
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}

const maria = new Pessoa('maria', 39)

maria.falar()
// console.log(maria)