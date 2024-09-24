
const prompt = require('prompt-sync')()

//nome idade
console.log('Seu nome e sua idade')

let nome = prompt('Insira seu nome: ')
let idade = parseInt(prompt('Insira sua idade: '))

console.log(`Olá! meu nome é ${nome} e tenho ${idade} anos`)

//nome e cidade
console.log('Seu nome e sua cidade')

const nomePessoa = prompt('Insira o seu nome:')
const nomeCidade = prompt('Insira a sua cidade:')

console.log(`Meu nome é ${nomePessoa} e eu sou de ${nomeCidade}`)

//media
console.log("Sua media")

const n1 = parseFloat(prompt("Insira a nota 1:"))
const n2 = parseFloat(prompt('Insira a nota 2:'))
const n3 = parseFloat(prompt('Insira a nota 3:'))

    let media = (n1 + n2 + n3) / 3
    var resultado = media.toFixed(2)


console.log(`Sua media é... ${resultado}.`) 

//operações matematicas
console.log('Operações matemaricas')

const num1 = parseInt(prompt('Insira o primeiro numero:'))
const num2 = parseInt(prompt('Insira o segundo numero:'))

    let soma = (num1 + num2)
    let subtração = (num1 - num2)
    let multiplicação = (num1 * num2)
    let divisão = (num1 / num2)

    console.log(`Os numeros ${num1} e ${num2} numa soma é: ${soma}.
        Numa subtração é: ${subtração}.
        Numa multiplicação é: ${multiplicação}.
        Numa divisão é ${divisão}.`)

//calculo de área do traingulo
console.log('Calcule a area do triangulo')

const baseTriangulo = parseFloat(prompt('Insira a base do triangulo: '))
const alturaTriangulo = parseFloat(prompt('Insira a altura do triangulo: '))

    let calculo = (baseTriangulo * alturaTriangulo / 2)
    var resultado = calculo.toFixed(2)

console.log(`a área do seu triangulo é: ${resultado}`) 


//calculo de desconto
console.log('Calcule o desconto')

const valor = parseFloat(prompt('Insira o valor original do produto: '))
const desconto = parseFloat(prompt('Insira o percentual de desconto: '))

const calcularDesconto = (desconto / 100 * valor)

console.log(`O valor com o desconto é de ${calcularDesconto}R$.`)


//calculo de imposto de renda

console.log('calculo de imposto de renda')

const valorBruto = parseFloat(prompt('Insira o Valor do salario bruto: '))

function calculoDeImposto() {
    let imposto
    
    if (valorBruto <= 2259.20) {
        return `O seu salário bruto é de R$ ${valorBruto.toFixed(2)}. A parcela a deduzir é de: isento`
    } else if (valorBruto <= 2826.65) {
        imposto = (7.5 / 100) * valorBruto
    } else if (valorBruto <= 3751.05) {
        imposto = (15 / 100) * valorBruto
    } else if (valorBruto <= 4664.68) {
        imposto = (22.5 / 100) * valorBruto
    } else {
        imposto = (27.5 / 100) * valorBruto
    }
    
    return `O seu salário bruto é de R$ ${valorBruto.toFixed(2)}. A parcela a deduzir é de: R$ ${imposto.toFixed(2)}`
}

console.log(calculoDeImposto())

// conversor de celsius para Farenheit

console.log('conversor de celsius para Farenheit')

const valorCelsius = parseInt(prompt('Valor em Celsius: '))

function calculoConversao() {
        console.log(`${valorCelsius}°C em fahrenheit são ${valorCelsius * 9/5 +32}°F`)
}

console.log(calculoConversao())


// Calculo IMC

console.log("calculo IMC")

const peso = parseFloat(prompt('Insira aqui o seu peso: '))
const altura = parseFloat(prompt('Insira aqui sua altura: '))

let IMC = peso / (altura * altura)
var resultado = IMC.toFixed(2)

function mostrarIMC() {
    if (resultado < 18.5) {
        return "abaixo do peso"
    } else if (resultado <= 24.9) {
        return 'peso normal'
    }else if (resultado <= 29) {
        return 'sobrepeso'
    } else {
        return 'obeso'
    }
}

console.log(`Você pesa ${peso}kg e tem ${altura} de altura. Se IMC é de ${resultado}. Você está ${mostrarIMC()}`)


// Conversor de moedas

console.log('Conversor de moedas')

function correcaoDeTexto(prompt) {
    let corrigido = prompt.trim()

    corrigido = corrigido.toLowerCase()
    
    corrigido = corrigido.charAt(0).toUpperCase() + corrigido.slice(1)

    return corrigido
}

const ValorReal = parseFloat(prompt('Insira o Valor a ser convertido em Real: '))

const moedaConverter = prompt('Indique para qual moeda você quer converter (disponiveis Dolar e Euro): ')

let conversao = correcaoDeTexto(moedaConverter)

function converterMoeda() {
    if (conversao == "Dolar") {
        return `O valor: ${ValorReal.toFixed(2)}R$ em Dolar são ${valor = (ValorReal / 5.48).toFixed(2)}US$ `
    } else if (conversao == "Euro") {
        return `O valor: ${ValorReal.toFixed(2)}R$ em Euros são ${valor = (ValorReal / 6.11).toFixed(2)}€`
    } else {
        return "Não temos este valor de moeda."
    }
}

console.log(converterMoeda())