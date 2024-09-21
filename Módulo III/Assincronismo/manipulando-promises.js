//modulo node para fazer leitura

const fs = require('fs')

// const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

/*
promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => texto.split('\n').slice(1))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => {
        console.log('Deu ruim', error)
    })
*/

//Usando await:

async function buscarArquivo(){
    try {
        
        const arquivo = await fs.promises.readFile('tarefas.csv') //forma reduzida de lidar com promises
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)

    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArquivo()