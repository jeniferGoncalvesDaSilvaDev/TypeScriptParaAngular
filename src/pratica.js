var dadosPessoal = {
    nome: "Light Yagami",
    idade: 17,
    peso: 50,
    altura: 1.75
};
//dizer happy birthday
function happyBirthday() {
    var ano = new Date("2023");
    //console.log(ano);
    //let anoNascimento:Date = new Date("1986-10-31");
    var anoNascimento = ano.getFullYear() - dadosPessoal.idade;
    //console.log(anoNascimento);
    if (anoNascimento === 2006) {
        console.log("Happy Birthday!");
    }
    else {
        console.log("Not Happy Birthday!");
    }
}
happyBirthday();
//verificar idade
function verificarIdade() {
    if (dadosPessoal.idade >= 18) {
        console.log("".concat(dadosPessoal.nome, " \u00E9 maior de idade"));
    }
    else {
        console.log("".concat(dadosPessoal.nome, " \u00E9 menor de idade"));
    }
}
//imc
function imc() {
    var peso = dadosPessoal.peso;
    var altura = dadosPessoal.altura;
    var imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }
    else if (imc > 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    }
    else if (imc > 24.9 && imc <= 29.9) {
        console.log("Sobrepeso");
    }
    else if (imc > 29.9) {
        console.log("Obesidade");
    }
}
verificarIdade();
imc();
