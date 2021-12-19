"use strict";
// Estrutura do Enum numérico
var Idioma_NUM;
(function (Idioma_NUM) {
    Idioma_NUM[Idioma_NUM["Portugues"] = 0] = "Portugues";
    Idioma_NUM[Idioma_NUM["Espanhol"] = 1] = "Espanhol";
    Idioma_NUM[Idioma_NUM["Ingles"] = 2] = "Ingles";
    Idioma_NUM[Idioma_NUM["Frances"] = 3] = "Frances";
})(Idioma_NUM || (Idioma_NUM = {}));
// Estrutura de Enum string
var Idioma_STRING;
(function (Idioma_STRING) {
    Idioma_STRING["Portugues"] = "PT-BR";
    Idioma_STRING["Espanhol"] = "ES";
    Idioma_STRING["Ingles"] = "EN";
    Idioma_STRING["Frances"] = "FR";
})(Idioma_STRING || (Idioma_STRING = {}));
;
function comida(c) {
    console.log(c);
    return 'Comidas muito apetitosas!';
}
console.log(comida(2 /* Pizza */));
