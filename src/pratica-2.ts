//personagem do jogo robot shooter
//robo
class roboto{
    n:string;
    strenght:number;
    ID:number;
    weapeon:string;
    constructor(n:string,strenght:number,ID:number,weapeon:string){
        this.n=n;
        this.strenght=strenght;
        this.ID=ID;
        this.weapeon=weapeon;
    }
    attackBot():any{
        return `Atack with ${this.weapeon}`
    }
}
let robot:roboto = new roboto("xr89",2,123,"Pistol");
console.log(robot);
console.log(robot.attackBot())
//allien
class Allien{
    raca:string;
    strenght:number;
    tentaculo:number;
    constructor(raca:string,strenght:number,tentaculo:number){
        this.raca=raca;
        this.strenght=strenght;
        this.tentaculo=tentaculo;
    }
    attackAllien():any{
        return `Atack with ${this.tentaculo} tentaculos`
    }
}
//subclasses de Allien

class BolaDeFogo extends Allien{
    bolaFogo:number;
    constructor(raca:string,strenght:number,tentaculo:number,bolaFogo:number){
        super(raca,strenght,tentaculo);
        this.bolaFogo=bolaFogo;
    }
    attackAllienFogo():any{
        return `Atack with ${this.bolaFogo} bolas de fogo`
    }
}

let allien:Allien = new Allien("Goldfish",2,6);

console.log(allien);

console.log(allien.attackAllien())
let allienFogo:BolaDeFogo=new BolaDeFogo("Pepper",4,6,1);

console.log(allienFogo);

console.log(allienFogo.attackAllienFogo())