"use strict";

//Usando modo estrito
let name = "Maria" 
let idade = 19
let hobes = "ler, escrever, assistir"

let juntandoTudoOne = "A"+ " " + name + " tem " + idade + " anos e gosta de " + hobes + "!"
let juntandoTudoTwo = `A ${name} tem ${idade} anos e gosta de ${hobes}!`

console.log(juntandoTudoOne)
console.log(juntandoTudoTwo)

/*
Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.

Tendo o texto acima, crie 7 variáveis com seus valores; depois faça pelo menos 3 concatenações 
usando ``, ${} e também +, ou seja, serão 6 concatenações (use nomes camelCase)
*/