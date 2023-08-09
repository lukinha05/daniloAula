/*var input = "TextoComMaiusculas";
var regex = /^[A-Z]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas letras maiúsculas.");
} else {
    console.log("A entrada não contém apenas letras maiúsculas.");
}*/
//////////////////////////////////////////////////////////
/*var input = "textosemmenusculas";
var regex = /^[a-z]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas letras minúsculas.");
} else {
    console.log("A entrada não contém apenas letras minúsculas.");
}*/
var input = "!@#$%^&*()";
var regex = /^[^a-zA-Z0-9]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas caracteres especiais.");
} else {
    console.log("A entrada não contém apenas caracteres especiais.");
}