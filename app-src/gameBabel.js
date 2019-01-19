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
 var a = 1
 /** let - permite que você declare variáveis limitando seu escopo no bloco*/
 let aa = "1"
 {
     let ab = "2" // ela respeita o escopo, só podendo ser acessada aqui dentro
 }
//  document.write(aa)
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
 const c = 1
//  c = 2 // Erro de sintaxe, e c é somente leitura

/**
 * Números
 * O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos.
 */
 let num = 1.123123
 let num2 = num.toFixed(2) // Retorna uma string representando o número na notação de ponto fixo.
//  document.write(num2) 

 let n1 = 2
 let n2 = '3'
 let n3 = 'ab'
//  document.write(n1/n2) // Aqui o js faz a conversão inplicitamente
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
 let nome = 'Luiz'
 let sNome = 'Felipe'
 let completo = nome + sNome
//  document.write(nome + ' ' + sNome + ' Possui tamaho: ' + completo.length + '<br>') // retorna o tamanho da string
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
 let ligado = true
//  document.write(ligado)
 
/**
 * Operadores
 * 
 * Aritméticos: +  -  *  /
 * Comparação: >  <  >=  <=
 * Igualdade: ==   ===(estritamente igual)  !=   !==(estritamente diferente)
 * Lógicos: &&  ||  !
 * Ternário: (expressao) ? se_true : se_false
 */
 document.write(`Aritméticos:  ${5 + 1}, ${5 - 1}, ${5 * 1}, ${10 / 2}; <br>
                Comparação:  ${5 > 1}, ${5 < 1}, ${5 >= 1}, ${10 <= 2}; <br>
                Igualdade:  ${10 == 10}, ${10 === '10'}, ${5 != 10}, ${10 != '10'}, ${10 !== '10'}; <br>
                Lógicos:  ${5 > 1 && 5 < 10}, ${5 > 10 || 5 < 10}, ${!5 >= 1}; <br>
                Ternário:  ${5 < 1 ? "Maior": "Menor"}; <br>
                ` 
 )
