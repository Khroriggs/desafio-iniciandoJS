alert("Hello Word!")
var numberOne = prompt("Somaremos dois números, qual será o primeiro?")
var numberTwo = prompt("Qual o outro Número?")
var soma = (Number(numberOne) + Number(numberTwo));
alert(`A soma dos dois números deu: ${soma}`)
let checagem = prompt ("Agora, Insira um caractere e eu te direi se é ou não um número!")
if(Number(checagem) == checagem){    
    alert("É um número")
}
else {
    alert("Não é um número")
}
let checagemL = prompt ("Agora, Insira um caractere e eu te direi se é ou não uma string!")
if(Number(checagemL) == checagemL){    
    alert("Não é uma string")
}
else {
    alert("É uma string")

}
let checagemB = prompt ("Agora, Insira algo e eu te direi se é ou não um valor booleano!")
if(checagemB == 'true'||checagemB == 'false'){    
    alert("É um valor booleano")
}
else {
    alert("Não é um valor booleano")

}

var numberOne = prompt("Subtrairemos dois números, qual será o primeiro?")
var numberTwo = prompt("Qual o outro Número?")
var subtração = (Number(numberOne) - Number(numberTwo));
alert(`A subtração dos dois números deu: ${subtração}`)

var numberOne = prompt("Multiplicaremos dois números, qual será o primeiro?")
var numberTwo = prompt("Qual o outro Número?")
var multiplic = (Number(numberOne) * Number(numberTwo));
alert(`A multiplicação dos dois números deu: ${multiplic}`)


var numberOne = prompt("Dividiremos dois números, qual será o primeiro?")
var numberTwo = prompt("Qual o outro Número?")
var divisao = (Number(numberOne) / Number(numberTwo));
alert(`A divisão dos dois números deu: ${divisao.toFixed(2)}`)


var par = prompt("Verificaremos se o número é par")
if (par % 2  == 0) {
    alert("O número é par")
} else {
    alert("O número não é par")
};


var par = prompt("Verificaremos se o número é impar")
if (par % 2  == 0) {
    alert("O número não é impar")
} else {
    alert("O número é impar")
};