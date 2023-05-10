let dadosPessoal ={
    nome: "Light Yagami",
    idade: 17,
    peso: 50,
    altura: 1.75
}

//dizer happy birthday

function happyBirthday():void{
    let ano:Date = new Date("2023");
    //console.log(ano);
    //let anoNascimento:Date = new Date("1986-10-31");
    let anoNascimento:number = ano.getFullYear() - dadosPessoal.idade;
    //console.log(anoNascimento);
    if(anoNascimento ===2006){
        console.log("Happy Birthday!");
    }else{
        console.log("Not Happy Birthday!");
    }

}
happyBirthday();

//verificar idade

function verificarIdade():void{
    if(dadosPessoal.idade >= 18){
        console.log(`${dadosPessoal.nome} é maior de idade`);
    }else{
        console.log(`${dadosPessoal.nome} é menor de idade`);
    }
}
//imc

function imc():void{
    let peso:number = dadosPessoal.peso;
    let altura:number = dadosPessoal.altura;
    let imc:number = peso / (altura * altura);
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc > 18.5 && imc <=24.9){
         console.log("Peso normal");
    }else if(imc > 24.9 && imc <=29.9){
        console.log("Sobrepeso");
    }else if(imc>29.9){
        console.log("Obesidade");
    }
}

verificarIdade();

imc();