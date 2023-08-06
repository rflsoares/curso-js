/*
Progama para cálculo de médias em escolas com 3 trimestres
*/

//Pego a primeira nota
let nota1Trimestre = parseFloat(prompt("Qual foi sua nota do primeiro trimestre?"))

//Pego a segunda nota
let nota2Trimestre = parseFloat(prompt("Qual foi sua nota do segundo trimestre?"))

//Pego a terceira nota
let nota3Trimestre = parseFloat(prompt("Qual foi sua nota do terceiro trimestre?"))

//Calculo da média
function calcularMedia(){
    let media = ((nota1Trimestre + nota2Trimestre + nota3Trimestre)/3)
    
    //Retorna a média com duas casas decimais(toFixed(2))
    return media.toFixed(2)
}

//Armazeno o resultado da função anterior na variável resultado
let resultado = "A sua média foi de " + calcularMedia()

//Exibo como alert a média
alert(resultado)