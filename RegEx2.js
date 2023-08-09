var texto = "Este é um exemplo de texto. Neste texto, a palavra exemplo aparece várias vezes. Exemplo é a palavra que queremos contar.";

var palavraContada = "exemplo";
var expressaoRegular = new RegExp('\\b' + palavraContada + '\\b', 'gi');
var contagem = (texto.match(expressaoRegular) || []).length;

console.log(`A palavra "${palavraContada}" aparece ${contagem} vezes no texto.`);