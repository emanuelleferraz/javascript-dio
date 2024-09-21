
//First Class Functions
//Higher Order Functions

// function falarMeuNome(){
//     console.log('Meu nome é Maria')
// }

// // const referenciaNova = falarMeuNome //atribuindo uma função para uma variável

// // referenciaNova()

// function falarMeuNomeCompleto(falarMeuNome){ //atribuindo uma função a outra função
//     falarMeuNome()
//     console.log('da Silva')
// }

// falarMeuNomeCompleto(falarMeuNome)

// //Function Expression:
// const nomeDeOutraFuncao = function (){
//     console.log('NomeDeOutraFuncao')
// }

// //Function Declaration:
// function nomeDaFuncao(){
//     console.log('nomeDaFuncao')
// }

// nomeDeOutraFuncao()
// nomeDaFuncao()

// //Arrow Function:
// const funcao2 = () => {
//     console.log(this) //arrow functions: não tem um contexto, não tem esse this fica vazio o objeto
// }

// const maria = {
//     nome: 'Maria',
//     funcao2
// }

// maria.funcao2()

// //Closures
// function soma(x){
//     return function (y){
//         return x + y; //capacidade de armazenar o x
//     }
// }

// console.log(soma(10)(20))

function adicao(x, y){
    return x + y;
}

function multiplicacao(x, y){
    return x * y;
}

function calcular(x, operacao, y){
    console.log(operacao(x, y)) //padrão Strategy (inversão de controle)
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

