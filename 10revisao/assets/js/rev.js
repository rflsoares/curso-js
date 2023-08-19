let titulo = "<h3> Aprendendo funções </h3>"
document.write(titulo)

//Calculo de área de retângulo
function calcAreaRet(base, altura) {
    return (base * altura)
}
console.log(calcAreaRet(4.4, 6.9))

const calcArea = function (b, h) {
    return (b * h)
}
console.log(calcArea(5, 9))

const calcRet = (b, h) => b * h;
console.log(calcRet(8, 4))

//Área do triângulo (b * h)/2

function calcAreaTrian(base, altura) {
    return (base * altura) / 2
}
console.log(calcAreaTrian(9, 4))

const calcTrian = function (b, h) {
    return (b * h) / 2
}
console.log(calcTrian(9, 5))

const calcTrian2 = (b, h) => (b * h) / 2;
console.log(calcTrian2(3, 2))

/*
Calculo das raízes de uma equação de segundo grau:
x1 = -b + raiz(b² - 4ac)/2a
x2 = -b - raiz(b² - 4ac)/2a
*/

function raiz(a, b, c) {
    let x1 = (-b + (Math.sqrt(b * b - 4 * a * c))) / (2 * a)
    let x2 = (-b - (Math.sqrt(b * b - 4 * a * c))) / (2 * a)

    console.log(`x1 vale ${x1} e x2 vale ${x2}`)
}
raiz(5, 13, -10)
raiz(1, 2, 10)
raiz(5, 27, -9)
raiz(1, -8, 12)
raiz(1, 2, -8)

const raiz2 = function (a, b, c) {
    let x1 = (-b + (Math.sqrt(b * b - 4 * a * c))) / (2 * a)
    let x2 = (-b - (Math.sqrt(b * b - 4 * a * c))) / (2 * a)

    console.log(`O x1 vale ${x1} e x2 vale ${x2}`)
}
raiz2(3, 3, -3)
raiz2(1, -8, 12)
raiz2(1, 2, -8)

const raiz3 = function (a, b, c) {
    let delta = Math.sqrt(b * b - 4 * a * c)
    if (delta >= 0) {
        let x1 = (-b + delta) / (2 * a)
        let x2 = (-b - delta) / (2 * a)

        console.log(`O valor de x1 vale ${x1} e x2 vale ${x2}`)
    } else {
        console.log("Não existem raizes reais")
    }
}
raiz3(1, -8, 12)
raiz3(1, 2, -8)
raiz3(1, 2, 3)

/*
 Sabendo que a distância entre dois pontos no plano cartesiano é 
 dado pela fórmula
 d = raiz((x2 - x1)² + (y2 - y1)²)
 calcule A(2, -1), B(5, 6)
 X(-4, 4), Y(3, 4) R = 7
 C(-4, -6), D(4, -12) R = 10 
 */

function disPontos(x1, x2, y1, y2) {
    let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    console.log("O valor vai ser " + distancia)
}
disPontos(2, 5, -1, 6)
disPontos(-4, 3, 4, 4)
disPontos(-4, 4, -6, -12)

/*Crie a fórmula para cálculo de determinantes de ordem 3 usando a regra de saurus 
D = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - 
(a13 * a22 * a31 + a11 * a21 * a32 + a12 * a21 * a33)
A = 2 1 1 
     3 1 2 
     1 -1 0 R = 2
B = 1 3 5 
     2 4 1 
    -4 1 -1 R = 79
C = 3 2 1
   -1 -2 0
    0 2 1 
    R = -6
*/
















