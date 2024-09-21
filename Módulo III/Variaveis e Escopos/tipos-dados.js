/*
    boolean
    null
    undefined
    number
    string
    Symbol
*/

//object -> é mutável, carrega métodos

// let x = 10;
// x = 'texto' //uma variável não fica restrita a um único tipo (JS é fracamente tipada)

//Diferença entre as comparações:
// console.log(10 == '10') // comparação desprezando o tipo
// console.log(10 === '10') //comparação considerando o tipo

//Diferença entre strings:
// console.log("<div id=\"10\">teste</div>");
// console.log('<div id="10">teste</div>');

//Objeto:

const pessoa = {
    nome: "Renan",
    idade: 30,
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.falar()