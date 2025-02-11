// 1. feladat: Auto interface
//2. feladat: Autoflotta osztály
var TAutoFlotta = /** @class */ (function () {
    function TAutoFlotta(kezdoAutok) {
        this.autok = [];
        if (kezdoAutok) {
            this.autok = kezdoAutok;
        }
    }
    TAutoFlotta.prototype.hozzad = function (auto) {
        this.autok.push(auto);
        console.log("".concat(auto.marka, " ").concat(auto.modell, " hozz\u00E1adva a flott\u00E1hoz."));
    };
    TAutoFlotta.prototype.torol = function (rendszam) {
        this.autok = this.autok.filter(function (x) { return x.rendszam !== rendszam; });
    };
    TAutoFlotta.prototype.listaz = function () {
        console.log('A flottában lévő autók:');
        this.autok.forEach(function (auto) {
            console.log("".concat(auto.rendszam, " ").concat(auto.marka, " ").concat(auto.modell, ", \u00C9vj\u00E1rat: ").concat(auto.evjarat));
        });
    };
    return TAutoFlotta;
}());
//3. feladat: példányosítás
//4. feladat: Adj hozzá néhány autót a flottához, majd törölj egyet, és végül listázd ki a maradék autókat.
var flotta = new TAutoFlotta();
flotta.hozzad({
    marka: 'Audi',
    modell: 'R8',
    evjarat: 2010,
    rendszam: "12345"
});
flotta.hozzad({
    marka: 'Tesla',
    modell: 'Model 3',
    evjarat: 2020,
    rendszam: "123456789"
});
flotta.hozzad({
    marka: 'Tesla',
    modell: 'Model Y',
    evjarat: 2023,
    rendszam: "123"
});
flotta.listaz();
flotta.torol('12345');
flotta.listaz();
