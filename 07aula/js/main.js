//multiplication of values
function multNumbers(x,y)
{
    let result = x * y
    return result
}

let mult=function(x,y)
{
    let result = x * y
    return result
}

let objMult={
    func:function(x,y){
        let result = x * y
        return result
    }
}

//Set name for users
/*function myName(val)
{
    let nmae

    function setName()
    {
        if(val == 1){
            name='Thiago'
        }else if(val == 2){
            name='Thais'
        }else{
            name="Nenhum dado foi disponibilizado"
        }
        return name
    }
    return setName()
}
console.log(myName(1))

//Arrow functions
function sum(x,y)
{
    return x+y
}
*/

//Arrow functions 
function sum(x,y)
{
    return x+y
}
console.log(sum(10,5))

let sumArrow=(x,y)=>{
    return x+y
}
console.log(sumArrow(3,4))

let sumArrow2=(x,y)=>x+y
console.log(sumArrow2(6,3))