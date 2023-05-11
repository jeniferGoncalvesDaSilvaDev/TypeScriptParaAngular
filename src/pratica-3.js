var vampiro = {
    name: "Dracula",
    age: 400,
    f: 10,
    poder: "Beber Sangue"
};
console.log(vampiro);
var Vampire = /** @class */ (function () {
    function Vampire(name, age, f, poder) {
        this.name = name;
        this.age = age;
        this.f = f;
        this.poder = poder;
    }
    return Vampire;
}());
var dark = new Vampire("Lestat", 600, 568, "Chicote");
console.log(dark);
