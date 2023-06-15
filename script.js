const readlineSync = require('readline-sync');
let max = 0
while(true){
    const valueMax = readlineSync.questionInt('Digite o valor de n:');    
    if(valueMax >= 4){
        max = valueMax
        break
    }
}

const numero1 = readlineSync.questionInt('Digite o primeiro numero:');
const numero2 = readlineSync.questionInt('Digite o segundo numero:');
const numero3 = readlineSync.questionInt('Digite o terceiro numero: ');

let array = [numero1 , numero2, numero3] // essa array sera retirada sempre o primeiro numero para o calculo
let arrayRender = [numero1 , numero2, numero3]  // essta array tera sempre um novo numero add ao final
let operador = "+"

let soma = 0
let subtracao = 0

let quantidade = 0 
while(quantidade <= max){
    calc()
    quantidade++
}

function calc(){
    if(operador === "+"){
        soma = array[0] + array[1] + array[2] 
        operador = "-"
        array.push(soma)
        arrayRender.push(soma)
    } 
    array.shift()
    soma =0
    
    if(operador === "-"){
        operador = "+"
        subtracao = array[0] - array[1] - array[2] 
        array.push(subtracao)
        arrayRender.push(subtracao)
    }
    subtracao = 0
    array.shift()    
}

const arrayMaxRender = []
for (let index = 0; index < max; index++) {
    arrayMaxRender.push(arrayRender[index])
}
console.log()
console.log("odem direta")
console.log(arrayMaxRender)
console.log()
console.log("ordem invertida")
console.log(arrayMaxRender.reverse()); 


