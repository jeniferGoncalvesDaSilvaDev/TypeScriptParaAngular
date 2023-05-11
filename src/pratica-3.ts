//types X interface 
//luts de monstros-Halloween
interface dracula {
    name: string;
    age: number;
    f:number;
    poder:string;
}
let vampiro={
    name: "Dracula",
    age: 400,
    f: 10,
    poder: "Beber Sangue"
}
console.log(vampiro);
class Vampire implements dracula {
    name: string;
    age: number;
    f:number;
    poder:string;
    constructor(name:string, age:number, f:number, poder:string) {
        this.name = name;
        this.age = age;
        this.f = f;
        this.poder = poder;
    }
}
let dark:Vampire = new Vampire("Lestat",600,568,"Chicote");
console.log(dark);
