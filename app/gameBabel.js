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
  marca: 'BIC'
};
caneta.ponta = 0.7; // atribuindo valor a caneta

var propriedade = 'transparente';
caneta[propriedade] = true;
console.log(caneta); // impriminto a caneta

document.write(caneta.ponta); // retorna as propriedades da caneta
//# sourceMappingURL=gameBabel.js.map