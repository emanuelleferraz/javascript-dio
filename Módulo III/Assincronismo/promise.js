
/*Interface de uma promise:

new Promise((resolve, reject) => {
    //..
    //...
    resolve()
    //.. *deu errado*
    reject()
})

*/

/*
    const promessaNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})
*/

const promessaNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

//callbacks
promessaNumeroQualquer
    .then((value) => { //se der certo..
    console.log(value)
    })
    .catch((error) => { //se não der certo..
        console.log(error) 
    })
    .finally(() => {
        console.log('Finalizou')
    })
