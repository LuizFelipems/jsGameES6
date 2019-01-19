"use strict";

// document.write("Fui compilado pelo Babel 7 ")

/**
 * Variáveis
 * Você usa variáveis como nomes simbólicos para os valores em sua aplicação.
 * 
 * Tipos de dados:
 * Boolean. true e false.
 * null. Uma palavra-chave que indica valor nulo.
 * undefined. Uma propriedade superior cujo valor é indefinido.
 * Number. 42 ou 3.14159.
 * String. "Howdy"
 * Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
 * Object. Objetos
 */
var a = 1;
/** let - permite que você declare variáveis limitando seu escopo no bloco*/

var aa = "1";
{
  var ab = "2"; // ela respeita o escopo, só podendo ser acessada aqui dentro
} //  document.write(aa)
//  document.write(ab) // Uncaught ReferenceError: ab is not defined

/** Convertendo strings para números */
//  document.write(parseInt(aa))
//  document.write(parseFloat(aa))

/**
 * Hoisting (lançada para o topo)
 * É quando você utiliza a variável e declara depois, sem obter uma exceção.
 * Elas retornarão um valor undefined.
 */
//  document.write(b)
//  var b = 1

/**
 * Constantes
 * Uma constante não pode alterar seu valor por meio de uma atribuição ou 
 * ao ser declarada novamente enquanto o script é executado. 
 * Deve ser inicializada com um valor.
 */

var c = 1; //  c = 2 // Erro de sintaxe, e c é somente leitura

/**
 * Números
 * O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos.
 */

var num = 1.123123;
var num2 = num.toFixed(2); // Retorna uma string representando o número na notação de ponto fixo.
//  document.write(num2) 

var n1 = 2;
var n2 = '3';
var n3 = 'ab'; //  document.write(n1/n2) // Aqui o js faz a conversão inplicitamente
//  document.write(n1+n2) // Aqui o js faz a concatenação de strings 
//  document.write(n1*n3) // Aqui o returna NaN
//  document.write(n1 * Number(n2)) // Aqui convertemos a string para número
//  document.write(n1 * +n2) // Aqui convertemos a string para número positivo
//  document.write(n1 * -n2) // Aqui convertemos a string para número positivo

/**
 * Strings
 * Strings são úteis para guardar dados que podem ser representados em forma de texto.
 * 
 */
//  let nome = 'Felipe "Ok"' // para imprimir as aspas no body
//  let nome = 'Felipe \"Ok\" ' // para imprimir as aspas no body

var nome = 'Luiz';
var sNome = 'Felipe';
var completo = nome + sNome; //  document.write(nome + ' ' + sNome + ' Possui tamaho: ' + completo.length + '<br>') // retorna o tamanho da string
//  document.write(completo.charAt(2) + '<br>') // Retorna o caracter da posição passada
//  document.write(completo.substring(0, 3) + '<br>') // Retorna um trecho dessa string
//  document.write(completo.toLowerCase() + '<br>') // Retorna a string em minúscula
//  document.write(completo.toUpperCase() + '<br>') // Retorna a string em minúscula

/**
 * Boolean
 * true ou false
 * 
 * Se o valor é omitido ou é 0, -0, null, false, NaN, undefined "", 
 * o objeto terá um valor inicial de false.
 * 
 */

var ligado = true; //  document.write(ligado)

/**
 * Operadores
 * 
 * Aritméticos: +  -  *  /
 * Comparação: >  <  >=  <=
 * Igualdade: ==   ===(estritamente igual)  !=   !==(estritamente diferente)
 * Lógicos: &&  ||  !
 * Ternário: (expressao) ? se_true : se_false
 */
//  document.write(`Aritméticos:  ${5 + 1}, ${5 - 1}, ${5 * 1}, ${10 / 2}; <br>
//                 Comparação:  ${5 > 1}, ${5 < 1}, ${5 >= 1}, ${10 <= 2}; <br>
//                 Igualdade:  ${10 == 10}, ${10 === '10'}, ${5 != 10}, ${10 != '10'}, ${10 !== '10'}; <br>
//                 Lógicos:  ${5 > 1 && 5 < 10}, ${5 > 10 || 5 < 10}, ${!5 >= 1}; <br>
//                 Ternário:  ${5 < 1 ? "Maior": "Menor"}; <br>
//                 ` 
//  )

/**
 * Array
 * Semelhante a listas
 */

var lista = ['leite', 'água', 'banana']; //  lista[3] = 'farofa'
//  document.write(lista.length) // Retorna o tamanho do array
//  document.write(lista[1]) // Acessa o elemento do índice passado
// lista.pop() // Retira o ultimo elemento do array
// lista.shift() // Retira o primeiro elemento do array
// lista.unshift('pedra') // Adiciona um elemento no início do array
// lista.push('pedra') // Adiciona um elemento no final do array
// lista.splice(1, 2) // Retira o elemento a partir do indice e a quantidade de elementos após ele
//  document.write(lista) // Retorna o array

/**
 * Loops
 * São laços de condição, que serão executados até que a operação seja atendida
 * 
 */
//  let lista2 = ['leite', 'água', 'banana', 'carne', 'arroz', 'fejão', 'mostarda', 'macarrão', 'pão']
//  let i = 0
//  while (i <= 10) {
//     document.write(i + '<br>')
//     i+=1
//  }
//  for (let i = 0; i < lista2.length; i++) {
//      document.write(lista2[i] + '<br>')
//  }

/**
 * Estrutura Condicional
 * if else
 * switch case
 */

var idade = 22;

if (idade === 22) {
  document.write('Você tem 22 anos!');
} else if (idade >= 18) {
  document.write('Maior de idade.');
} else {
  document.write('Menor de idade.');
}

switch (idade) {
  case 17:
    document.write('tem 17' + '<br>');
    break;

  case 18:
    document.write('tem 18' + '<br>');

  default:
    document.write('Não sei');
    break;
}

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    //  break // Ele para o loop quando a condição for atingida
    continue; // Reinicia o loop quando a condição for atingida
  }

  document.write(i + '<br>');
}
//# sourceMappingURL=gameBabel.js.map