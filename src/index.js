//variaveis no ts
//tipo primitivos
var ligado = false;
var nome = "JeyJey";
var idade = 26;
var altura = 1.55;
//tipos espaciais
//null
//undefined
var nulo = null;
var indefinido = undefined;
//tipos abrangentes
//any 
//void
function dizerOi() {
    console.log("Oi");
}
var any = "Lain Iwakura";
//objetos 
var pessoa = {
    name: "JeyJey",
    idade: 26,
    cidade: "sc"
};
//arrays
var dados = ["JeyJey", "Mika"];
var dados2 = ["Lain", "L", "Light Ygami", "Lelouch"];
var infos = ["JeyJey", 26, "Mika", 45];
//tuplas
var boleto = ["agua", 166.30, 231];
//arrays metodos
//dados.filter();
//dates
let niver = new Date("2032-05-09");
console.log(niver.toDateString());
