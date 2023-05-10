//variaveis no ts
//tipo primitivos
let ligado:boolean = false;
let nome:string ="JeyJey";
let idade:number =26;
let altura:number=1.55;
//tipos espaciais
//null
//undefined
let nulo:null = null;
let indefinido:undefined = undefined;
//tipos abrangentes
//any 
//void
function dizerOi():void{
    console.log("Oi");
}
let any:any ="Lain Iwakura";
//objetos 
 
let pessoa:Object = {
    name:"JeyJey",
    idade:26,
    cidade:"sc"
}
console.log(pessoa)
//arrays
let dados:string[] =["JeyJey","Mika"];
let dados2:Array<string> = ["Lain","L","Light Ygami","Lelouch"];
let infos:(string|number)[]=["JeyJey",26,"Mika",45];
//tuplas
let boleto:[string,number,number]=["agua",166.30,231]
//arrays metodos
//dados.filter()
//dates
let niver:Date = new Date("2032-05-09")
console.log(niver.toDateString());