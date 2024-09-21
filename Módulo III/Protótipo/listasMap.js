//criando lista de pessoas
class Pessoa {
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Maria'), new Pessoa('Joana'), new Pessoa('Pedro')]

//Converter a lista de pessoas em uma lista de nomes com MAP
const listaNomes = lista.map((element) => element.name) //Converta esse elemento no >nome< dele!


console.log(listaNomes)

//E se eu quisesse transformar uma lista em um HTML?
const listaNomesHtml = lista.map((element) => {
    return `
    <li>
        ${element.name}
    </li>
    `
})

console.log(listaNomesHtml)