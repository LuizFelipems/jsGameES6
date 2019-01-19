"use strict";

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
var caneta = {
  cor: 'preto',
  marca: 'BIC',
  minhaCor: function minhaCor() {
    return this.cor;
  },
  escrever: function escrever() {
    return '........escrevendo........';
  }
};
caneta.ponta = 0.7; // atribuindo valor a caneta

var propriedade = 'transparente';
caneta[propriedade] = true;
console.log(caneta); // impriminto a caneta
// document.write(caneta.ponta) // retorna as propriedades da caneta
// document.write(caneta.minhaCor())
// document.write(caneta.escrever())

/**
 * Funções
 * Representa ações ou métodos
 */

function quadrado2(num) {
  return num * num;
}

function soma(n1, n2) {
  return n1 + n2;
}

document.write(quadrado2(4) + '<br>');
document.write(soma(4, 3) + '<br>');
/** Expressão de função */

var subtracao = function subtracao(n1, n2) {
  return n1 - n2;
};

document.write(subtracao(10, 5));
/** Arrow Function (Função de seta) */

var quadrado = function quadrado(num) {
  return num * 2;
};

document.write(quadrado(10));
//# sourceMappingURL=gameBabel.js.map