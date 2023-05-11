var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//personagem do jogo robot shooter
//robo
var roboto = /** @class */ (function () {
    function roboto(n, strenght, ID, weapeon) {
        this.n = n;
        this.strenght = strenght;
        this.ID = ID;
        this.weapeon = weapeon;
    }
    roboto.prototype.attackBot = function () {
        return "Atack with ".concat(this.weapeon);
    };
    return roboto;
}());
var robot = new roboto("xr89", 2, 123, "Pistol");
console.log(robot);
console.log(robot.attackBot());
//allien
var Allien = /** @class */ (function () {
    function Allien(raca, strenght, tentaculo) {
        this.raca = raca;
        this.strenght = strenght;
        this.tentaculo = tentaculo;
    }
    Allien.prototype.attackAllien = function () {
        return "Atack with ".concat(this.tentaculo, " tentaculos");
    };
    return Allien;
}());
//subclasses de Allien
var BolaDeFogo = /** @class */ (function (_super) {
    __extends(BolaDeFogo, _super);
    function BolaDeFogo(raca, strenght, tentaculo, bolaFogo) {
        var _this = _super.call(this, raca, strenght, tentaculo) || this;
        _this.bolaFogo = bolaFogo;
        return _this;
    }
    BolaDeFogo.prototype.attackAllienFogo = function () {
        return "Atack with ".concat(this.bolaFogo, " bolas de fogo");
    };
    return BolaDeFogo;
}(Allien));
var allien = new Allien("Goldfish", 2, 6);
console.log(allien);
console.log(allien.attackAllien());
var allienFogo = new BolaDeFogo("Pepper", 4, 6, 1);
console.log(allienFogo);
console.log(allienFogo.attackAllienFogo());
