let c = parseFloat(prompt("Insira um valor de capital inicial"))
let t = parseFloat(prompt("Insira o tempo em meses ou anos"))
let i = parseFloat(prompt("Qual a taxa a ser usada?"))

let J = c*((1 + i/100)**t)
let M = (J + c).toFixed(2)

n = 256;
n2 = "nome"
if(isNaN(c) || isNaN(t) || isNaN(i)){
    alert("n ou n2 não é um número")
} else {
    let soma = c + t
    alert("São números e a soma é " + soma)
}

alert("O montante é de " + M)

console.log(c)
console.log(t)
console.log(i)
console.log(J)
console.log(M)