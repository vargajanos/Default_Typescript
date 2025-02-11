var TKonyvtar = /** @class */ (function () {
    function TKonyvtar(konyv) {
        this.konyvek = [];
        if (konyv) {
            this.konyvek = konyv;
        }
    }
    TKonyvtar.prototype.hozzaad = function (konyv) {
        this.konyvek.push(konyv);
        console.log("".concat(konyv.cim, " hozz\u00E1adva a k\u00F6nyvekhez."));
    };
    TKonyvtar.prototype.torol = function (isbn) {
        this.konyvek = this.konyvek.filter(function (x) { return x.ISBN !== isbn; });
        console.log("".concat(isbn, " ez a k\u00F6nyv t\u00F6r\u00F6lve"));
    };
    TKonyvtar.prototype.listaz = function () {
        console.log("Összes könyv: \n");
        this.konyvek.forEach(function (konyv) {
            console.log("C\u00EDm: ".concat(konyv.cim, " Szerz\u0151: ").concat(konyv.szerzo, " Kiad\u00E1s \u00E9ve: ").concat(konyv.kiadasEve, " Kategori\u00E1k: ").concat(konyv.kategoriak));
        });
    };
    return TKonyvtar;
}());
var konyvtar = new TKonyvtar();
konyvtar.hozzaad({
    cim: 'Kedvenc',
    szerzo: 'Csoki',
    kiadasEve: 2010,
    kategoriak: ["finom", "jo"],
    ISBN: 1
});
konyvtar.hozzaad({
    cim: 'Finom',
    szerzo: 'Áron',
    kiadasEve: 2010,
    kategoriak: ["jo"],
    ISBN: 2
});
konyvtar.hozzaad({
    cim: 'Jó',
    szerzo: 'Blázs',
    kiadasEve: 2010,
    kategoriak: ["szep", "xx", "ddd"],
    ISBN: 3
});
konyvtar.listaz();
konyvtar.torol(1);
konyvtar.listaz();
