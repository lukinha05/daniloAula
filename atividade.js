/*Crie uma função que recebe 2 números como argumento e retorne se o primeiro é
maior ou igual ao segundo.*/
function MaiorNumero (a,b){
    if (a>b) { console.log ("o primeiro numero é maior que o segundo ")}
    else if (a==b){ console.log ("os primeiro e segundo numeros são iguais")}
    else {console.log("o segundo número é maior que o primeiro")}

}
MaiorNumero(8,23)

/*Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
uma validação para não permitir número negativo, e quando tiver retorna uma
mensagem de erro.*/
function idadeDias (idade){
   
if (idade>0) {console.log (idade*365)}
    else if (idade<0) {console.log("Erro, o número é negativo")}

}
idadeDias (-12)

/*Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,
exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.*/

function obterNomeMes(numero) {
    const meses = {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro"
    }
  
    if (numero in meses) {
      return meses[numero]
    }
  }
  
  const numMes = 4
  const nomeMes = obterNomeMes(numMes)
  console.log(nomeMes)

  /*Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/

function valorInverso(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return "Booleano ou Número esperados, mas o parâmetro é do tipo " + typeof parametro
    }
  }
  
  console.log(valorInverso(false))
  console.log(valorInverso(1)) 
  console.log(valorInverso('abc'))
/*Escreva uma função que recebe dois números inteiros não negativos e realize a
  multiplicação deles. Porém não pode utilizar o operador de multiplicação.*/
  function multiplicaSem(a, b) {
    let result = 0
  
    for (let i = 0; i < b; i++) {
      result += a
    }
  
    return result
  }
  let resultado = multiplicaSem(2, 5)
  console.log(resultado)


/*Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento
que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
Um array serpa retornado.
Exemplo:
repetir(“teste”, 2 ) // retorna [“teste”, “teste”]
repetir( 4, 3 ) // retorna[4 ,4, 4]*/

  function repetir(elemento, quantidade) 
   
  
    for (var i = 0; i < quantidade; i++) 
  
  console.log(repetir("teste", 2))
console.log(repetir(4, 3))

/*Crie uma função que recebe um array de elementos e retorne um array somente
com os números presentes no array recebido como parâmetro.
Exemplo:
filtro([“Js”, 2, “hoje”, 4, 5, 7, “teste”] // retorno [2,4,5,7]
filtro([“teste”,”tentativa”] // retorno []*/










