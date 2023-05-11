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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
console.log(pessoa);
//arrays
var dados = ["JeyJey", "Mika"];
var dados2 = ["Lain", "L", "Light Ygami", "Lelouch"];
var infos = ["JeyJey", 26, "Mika", 45];
//tuplas
var boleto = ["agua", 166.30, 231];
//arrays metodos
//dados.filter()
//dates
var niver = new Date("2032-05-09");
console.log(niver.toDateString());
//funçao
function addNumber(x, y) {
    var msg = console.log(x + y);
    return msg;
}
function sayHello(name) {
    console.log("Hello ".concat(name));
}
addNumber(2, 2);
sayHello("Harry Potter");
//funçoes multi types
function CallToPhone(phone) {
    console.log("Call to ".concat(phone));
}
CallToPhone(1234567890);
//funçoes async-assincrona, eh uma promise
function getDatabase(id, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, id];
        });
    });
}
var message = getDatabase(1234, "jenifer");
console.log(message);
var p1 = {
    name: "JeyJey",
    age: 26
};
console.log(p1);
var p2 = {
    name: "JeyJey",
    age: 26
};
console.log(p2);
var bot = {
    id: 1,
    name: "Bumblebee",
};
console.log(bot);
//utiliza o contrato com a interface, implementando suas caracteristicas
var transformer = /** @class */ (function () {
    function transformer(id, name) {
        this.id = id;
        this.name = name;
    }
    return transformer;
}());
var t = new transformer(2, "OptimusPrime");
//classes
var Personagem = /** @class */ (function () {
    function Personagem(i, age, forca, level) {
        this.i = i;
        this.age = age;
        this.forca = forca;
        this.level = level;
    }
    Personagem.prototype.attack = function () {
        console.log("Attack with ".concat(this.forca, " aumente ").concat(this.level));
    };
    return Personagem;
}());
var persona = new Personagem("Jin Kazama", 18, 245, 15);
console.log(persona);
console.log(persona.attack());
//data modifiers
//-public-acesso a toda a classe e fora desta
//-private-acesso somente dentro da classe
//-protected-acesso dentro de uma classe e suas sub classes
//subclasses-toda subclasse deve ter um metodo super(), que herda as prprieddes de uma classe
var magician = /** @class */ (function (_super) {
    __extends(magician, _super);
    function magician(i, age, forca, level, magicPoints) {
        var _this = _super.call(this, i, age, forca, level) || this;
        _this.i = i;
        _this.age = age;
        _this.forca = forca;
        _this.level = level;
        _this.magicPoints = magicPoints;
        return _this;
    }
    return magician;
}(Personagem));
var mago = new magician("Merlin", 54, 456, 17, 589);
console.log(mago);
//gerics
//funçao que da varios arrays e retona um array-transforma tudo em um array soh
function concatArray() {
    var _a;
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    return (_a = new Array()).concat.apply(_a, itens);
}
var numArray = concatArray([1, 2, 7], [4, 7, 2, 45, 1]);
var strArray = concatArray(["Mika", "Jey", "Amanda", "Juliana"], ["Ratched", "Misa", "Mikasa", "Kirisu", "Norma Bates"]);
console.log(numArray);
console.log(strArray);
