
let numberOne= prompt("Digite um número 1")
let numberTwo= prompt("Digite um número 2")

numberOne = Number(numberOne) 
numberTwo = Number(numberTwo)



let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo


alert ("A soma é " + sum)
alert ("A subtração é " + sub)
alert ("A multiplicação é "+ multi)
alert ("A divisão é "+ div.toFixed(2))
alert ("O resto da divisão é "+ rest)

function numberEqual () {
    if (numberOne == numberTwo) {
        alert ("Os números inseridos eram iguais!")
    } else {
        alert("Os números inseridos são diferentes")
    }
}

function ParOuImpar () {
    if (rest%2 == 0){
        alert ("É par");
    } else {
        alert ("É impar");
    }

}

numberEqual ()
ParOuImpar ()
