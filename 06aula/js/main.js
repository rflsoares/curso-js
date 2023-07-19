/*
Programa para apresentar o resultado segundo a nota inserida
No prompt que se apresenta
Se menor que 6, reprovado
Se maior ou igual a 6 e menor que 7, recuperação
Se outros resultados, aprovado 
*/
let nota = prompt('Qual foi sua média anual?')
if (nota < 6) {
    console.log('Reprovado')
}
else if (nota >= 6 && nota < 7) {
    console.log('Ficou em Recuperação')
}
else {
    console.log('Está Aprovado')
}