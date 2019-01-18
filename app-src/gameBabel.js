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
 c = 2 // Erro de sintaxe, e c é somente leitura
