/*let age=20;
*/

/*if(age > 18){
    console.log('Ele é maior de idade')
}else if(age == 18){
    console.log('Ele tem exatamente a idade')
}else{
    console.log('Ele é menor de idade')
}*/

/*(age > 18)?console.log('Ele é maior de idade'):console.log('Ele é menor de idade')
*/

/*let year=1;

switch (year){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Mês Inválido!");
        break;
}
*/

let inicialData=new Date();
const anoQueNasci = 2006
let anoAtual = inicialData.getFullYear();
console.log(anoAtual - anoQueNasci);
