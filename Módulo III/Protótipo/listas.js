//Foreach - Percorrer a lista orientado a funções

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach((value, i, listRef) => {
//     console.log(value, i, listRef)
// })  

lista.forEach((value) => {
    console.log(value)
})

//Filter
const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0) //diferença para o foreach é que o filter traz uma nova lista
})

console.log(listaDeNumerosPares)

//Reduce - reduzindo a lista a um único valor/elemento
const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current //soma de todos os números
}, 0/*pode ser passado o valor inicial*/)

console.log(somaDeTodosOsNumeros)

//Join - juntar com um separador e transformar a lista numa string
const listaDeNomes = [{nome: 'Renan'}, {nome: 'Maria'}, {nome: 'Joana'}, {nome: 'Marcelo'}]

console.log(listaDeNomes.map((e) => e.nome).join('; '))
console.log(listaDeNomes.map(e => e.nome).filter((e) => e.startsWith('M')).join('; '))
//Em HTML
const elementosEmHtml = listaDeNomes
    .filter((e) => e.nome.startsWith('M'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)
