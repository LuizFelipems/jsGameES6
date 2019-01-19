/**
 * Objeto
 * São para modelar os objetos do mundo real.
 * Possuem propriedades e funções.
 * 
 * *OBS: Como o JavaScript é uma linguagem prototipada, 
 * não é necessário criar uma classe para termos um objeto.
 * 
 */
//  let obj = {} // Objeto vazio
let caneta ={
    cor: 'preto',
    marca: 'BIC',
    minhaCor: function () { 
        return this.cor
    },
    escrever: function () { 
        return '........escrevendo........'
    }
}
caneta.ponta = 0.7 // atribuindo valor a caneta
let propriedade = 'transparente'
caneta[propriedade] = true
console.log(caneta) // impriminto a caneta
// document.write(caneta.ponta) // retorna as propriedades da caneta
// document.write(caneta.minhaCor())
// document.write(caneta.escrever())

/**
 * Funções
 * Representa ações ou métodos
 */
function quadrado2 (num) {
    return num * num
}
function soma (n1, n2) {
    return n1 + n2
}
document.write(quadrado2(4) + '<br>')
document.write(soma(4, 3) + '<br>')

/** Expressão de função */
let subtracao = function (n1, n2) {
    return n1 - n2
}
document.write(subtracao(10, 5))

/** Arrow Function (Função de seta) */
let quadrado = num => num * 2

document.write(quadrado(10))
