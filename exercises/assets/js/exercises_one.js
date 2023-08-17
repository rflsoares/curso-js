/* Exercício 1:
Declare duas variáveis usando let e atribua a elas dois números inteiros. 
Em seguida, exiba a soma das variáveis usando console.log.
*/ 


/*let number1 = 34
let number2 = 35
console.log(number1 + number2)
*/


/* Exercício 2:
Declare uma variável constante com seu nome e exiba-a em um alerta usando alert.
*/ 


/*const nome = "Rafael"
alert(nome)
*/


/* Exercício 3:
Peça ao usuário para inserir um número usando prompt, multiplique esse número por 5 e exiba o resultado 
usando console.log.
*/ 


/*
let number = prompt("Insira um número")
let resultado = (number * 5)
console.log(resultado)
/*


/* Exercício 4:
Declare três variáveis usando let e atribua a elas as palavras "maçã", "banana" e "laranja". Concatene 
essas palavras em uma única string e exiba usando document.write.
*/


/*
let fruta1 = "maçã"
let fruta2 = "banana"
let fruta3 = "laranja"
let todasFrutas = fruta1 + ", " + fruta2 + ", " + fruta3
document.write(todasFrutas)
*/


/* Exercício 5:
Declare uma variável constante com um número qualquer. Peça ao usuário para inserir outro número usando
prompt. Some os dois números e exiba o resultado em um alerta.
*/ 


/*
let number = 50
let number2 = prompt("Insira outro número")
let resultado = (number + number2)
alert(resultado)
*/


/* Exercício 6:
Declare uma variável constante e atribua a ela o valor booleano true. Em seguida, solicite ao usuário 
que confirme a veracidade da variável e exiba o resultado usando console.log.
*/


/*
const verdadeiro = true
let confirmacao = confirm("Isso é verdadeiro?")
console.log("A confirmação é: " + confirmacao)
*/


/* Exercício 7:
Crie um programa que pergunte ao usuário seu nome usando prompt. Em seguida, use document.write para 
exibir uma saudação personalizada, concatenando o nome fornecido.
*/ 


/*
let name1 = prompt("Insira seu nome")
document.write("Seja bem vindo " + name1)
*/


/* Exercício 8:
Declare duas variáveis com números inteiros diferentes. Compare essas variáveis usando operadores de 
comparação (>, <, >=, <=) e exiba os resultados usando console.log.

*/


/*let numb1 = 23
let numb2 = 54
console.log(numb1 + " > " + numb2 + ": " + (numb1 > numb2))
console.log(numb1 + " < " + numb2 + ": " + (numb1 < numb2))
console.log(numb1 + " >= " + numb2 + ": " + (numb1 >= numb2))
console.log(numb1 + " <= " + numb2 + ": " + (numb1 <= numb2))
*/


/* Exercício 9:
Peça ao usuário para inserir um número usando prompt. Verifique se o número é par ou ímpar e exiba o 
resultado em um alerta.

*/


/*let number = prompt("Insira um número")
if (number % 2 === 0) {
    alert("O número é par.")   
} else {
    alert("O número é impar")
}
*/


/* Exercício 10:
Declare uma constante com o valor de π (pi) e peça ao usuário para inserir o raio de um círculo usando 
prompt. Calcule e exiba a área desse círculo usando console.log.

*/ 


/*const pi = 3.14
let raio = prompt("Insira o raio de um círculo")
let area = pi * raio * raio
console.log(area)
*/


/* Exercício 11:
Crie um programa que pergunte ao usuário se ele gosta de chocolate usando confirm. 
Exiba a resposta em um alerta.

*/ 

/*
let gostaDeChocolate = confirm("Você gosta de chocolate?")
alert("Resposta: " + gostaDeChocolate)
*/


/* Exercício 12:
Declare três variáveis usando let e atribua a elas números diferentes. Calcule a média desses números e 
exiba o resultado usando console.log.

*/ 


/*
let numb1 = 3
let numb2 = 2
let numb3 = 1
let média = (numb1 + numb2 + numb3)/3
console.log(média)
*/


/* Exercício 13:
Peça ao usuário para inserir seu ano de nascimento usando 
prompt. Calcule a idade do usuário e exiba em um alerta.

*/ 


/*
let anoNascimento = prompt("Insira sua data de nascimento")
let anoAtual = new Date().getFullYear()
let idade = anoAtual - parseInt(anoNascimento)
alert("A sua idade é " + idade + " anos.")
*/


/* Exercício 14:
Declare uma constante contendo uma frase qualquer. Peça ao usuário para inserir uma 
palavra usando prompt. Verifique se a palavra está contida na frase usando includes e exiba o 
resultado em um alerta.

*/ 


/*const frase = "Cade meu chinelo?"
let palavra = prompt("Insira uma palavra")
if (frase.includes(palavra)) {
    alert("Está aqui")
} else {
    alert("Não sei")
}
*/


/* Exercício 15:
Crie um programa que pergunte ao usuário quantos anos ele tem usando prompt. Se a idade for maior ou 
igual a 18, exiba um alerta dizendo que a pessoa é maior de idade; caso contrário, exiba um alerta 
dizendo que é menor de idade.

*/ 


/*
let idade = prompt("Qual a sua idade?")
if (idade >= 18) {
    alert("Você é maior de idade")
} else {
    alert("Você é menor de idade")
} 
*/


/* Exercício 16:
Declare uma variável constante com o valor de uma temperatura em graus Celsius. Converta essa 
temperatura para Fahrenheit usando a fórmula F = (C * 9/5) + 32 e exiba o resultado usando console.log.

*/ 


/*
let temperaturaCelsius = 45
let fahrenheit = (temperaturaCelsius * 9/5) + 32
console.log(fahrenheit)
*/


/* Exercício 17:
Peça ao usuário para inserir um número usando prompt. Verifique se o número é positivo, negativo ou 
zero, e exiba o resultado em um alerta.

*/ 


/*
let numero = prompt("Insira um número")
if (numero > 0) {
    alert("O número é positivo")
} else if (numero < 0) {
    alert("O número é negativo")
} else {
    alert("O número não é nenhum dos dois")
}
*/

/* Exercício 18:
Crie um programa que simule uma calculadora simples. Peça ao usuário para inserir dois números e a 
operação desejada (+, -, *, /). Realize a operação e exiba o resultado usando alert.

*/ 

/*
let num1 = parseFloat(prompt("Insira um número"))
let num2 = parseFloat(prompt("Insira outro número"))
let operacao = prompt("Escolha a equação (+, -, *, /)")


let resultado;
if (operacao === "+") {
    resultado = num1 + num2
} else if (operacao === "-") {
    resultado = num1 - num2
} else if (operacao === "*") {
    resultado = num1 * num2
} else if (operacao === "/") {
    resultado = num1 / num2
} else if (operacao === "+") {
    resultado = num1 + num2
} else {
    alert("Essa conta é inválida")
}

alert("O resultado é: " + resultado)
*/


/* Exercício 19:
Declare três variáveis com nomes de cores. Peça ao usuário para escolher uma das cores usando prompt. 
Se a cor escolhida for uma das variáveis declaradas, exiba um alerta dizendo que essa cor 
está disponível; caso contrário, exiba um alerta dizendo que a cor não está disponível.

*/ 


/*
const cor1 = "vermelho"
const cor2 = "verde"
const cor3 = "amarelo"
let corEscolhida = prompt("Escolha uma cor:")
if (corEscolhida === cor1 || corEscolhida === cor2 || corEscolhida === cor3) {
    alert("Cor disponível")
} else {
   alert("Cor indisponível") 
}
*/


/* Exercício 20:
Crie um programa que pergunte ao usuário se ele quer jogar um jogo usando confirm. 
Se o usuário concordar, exiba um alerta de boas-vindas; caso contrário, exiba um alerta de despedida.
*/


/*
let jogar = confirm("Você quer jogar?")
if (jogar) {
    alert("Seja bem vindo!")
} else {
    alert("Blz, até mais!")
}
*/