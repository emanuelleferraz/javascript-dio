//Objetos - Conceito chave-valor
const pessoa = {
    nome: 'Vitor Guerra',
    idade: 25,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //this se referirá a pessoa de dentro do objeto/struct
    }
};

//Incrementando
// pessoa.altura = 1.69;

//Excluindo
//delete pessoa.nome;

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa);
// pessoa.nome = 'Renan';
// pessoa.idade = 30;

// pessoa.descrever();

//Acessando dinamicamente
const atributo = 'idade';
console.log(pessoa[atributo]);
