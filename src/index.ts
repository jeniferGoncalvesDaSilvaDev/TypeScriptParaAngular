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
//funçao
function addNumber(x:number, y:number){
    const msg= console.log(x+y);
    return msg;
}
    
function sayHello(name:string){
    console.log(`Hello ${name}`);
}
addNumber(2,2);
sayHello("Harry Potter");
//funçoes multi types
function CallToPhone(phone:number | string){
    console.log(`Call to ${phone}`);
}
   

CallToPhone(1234567890);
//funçoes async-assincrona, eh uma promise
async function getDatabase(id:number , name:string){
    
      return id;
      
}
const message=getDatabase(1234,"jenifer")
console.log(message);
//interface X type
//types, sao usados para tipagem em geral
//interfaces, sao usados para tipar uma classe
//interface-eh um contrato de uma tipagem, herda as caracteristica do tipo dado. A propriedade readonly, eh somente leitura! Nao pode ser alterada.
interface Person1{
    name:string;
    age:number;
}
let p1:Person1 = {
    name:"JeyJey",
    age:26
}
console.log(p1);
interface Person2{
    readonly name:string;
    age:number;
}

let p2:Person2 = {
    name:"JeyJey",
    age:26
}
console.log(p2);
//type 
type robot={
    id:number;
    name:string;
    
}
let bot:robot={
    id:1,
    name:"Bumblebee",
    
}
console.log(bot);
//utiliza o contrato com a interface, implementando suas caracteristicas
class transformer implements robot{
    id: number;
    name: string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
       
    }
 

}
let t:transformer = new transformer(2,"OptimusPrime");
//classes
class Personagem{
   i:string;
   age:number;
   forca:number;
   level:number;
   
   constructor(i:string, age:number, forca:number,level:number){
    this.i=i;
    this.age=age;
    this.forca=forca;
    this.level=level;
   }
   attack():void{
    console.log(`Attack with ${this.forca} aumente ${this.level}`);
   }
   
}
let persona = new Personagem("Jin Kazama",18,245,15);
console.log(persona);
console.log(persona.attack())
//data modifiers
//-public-acesso a toda a classe e fora desta
//-private-acesso somente dentro da classe
//-protected-acesso dentro de uma classe e suas sub classes
//subclasses-toda subclasse deve ter um metodo super(), que herda as prprieddes de uma classe
class magician extends Personagem{
    magicPoints:number
    constructor(i:string, age:number, forca:number,level:number,magicPoints:number){
        super(i,age,forca,level);
        this.i=i;
        this.age=age;
        this.forca=forca;
        this.level=level;
        this.magicPoints=magicPoints;

    }
}
let mago= new magician("Merlin",54,456,17,589);
console.log(mago);