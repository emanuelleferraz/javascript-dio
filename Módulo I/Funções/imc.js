function calculaIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc){
    if (IMC < 18.5) {
       return 'Abaixo do Peso';
    
    } else if (IMC >= 18.5 && IMC < 25) {
        return  'Peso Normal';
    
    } else if (IMC >= 25 && IMC < 30) {
        return 'Acima do Peso';
    
    } else if (IMC >= 30 && IMC < 40) {
        return 'Obeso';
    
    } else{
        return 'Obesidade Grave';
    }
}

function main(){
    IMC = calculaIMC(43, 1.50);
    console.log('IMC: ' + IMC.toFixed(2));

    console.log(classificarIMC(IMC));
}
main();

//Existem as funções invocadas imediatamentos, por exemplo na main:
/*(function main(){
    IMC = calculaIMC(43, 1.50);
    console.log('IMC: ' + IMC.toFixed(2));

    console.log(classificarIMC(IMC));
})();*/
//Você não precisaria chamar a main(); ou sequer colocar o nome dela após function