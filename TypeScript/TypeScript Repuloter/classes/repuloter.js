"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trepuloter = void 0;
var Trepuloter = /** @class */ (function () {
    function Trepuloter() {
        this.repulogepFlotta = [];
        this.jaratok = [];
        this.utasok = [];
    }
    Trepuloter.prototype.repulogepHozzaadasa = function (repulogep) {
        this.repulogepFlotta.push(repulogep);
        console.log("".concat(repulogep.tipus, " hozz\u00E1adva a flott\u00E1hoz"));
    };
    Trepuloter.prototype.jaratInditasa = function (jarat) {
        this.jaratok.push(jarat);
        console.log("J\u00E1rat indul ".concat(jarat.celallomas, "-ra ").concat(jarat.indulas));
    };
    Trepuloter.prototype.utasRegisztracio = function (utas) {
        this.utasok.push(utas);
        console.log("Utas regisztr\u00E1lva: ".concat(utas.nev, ". "));
    };
    Trepuloter.prototype.foglalas = function (foglalas) {
        var utas = this.utasok.filter(function (u) { return u.id === foglalas.utasID; })[0];
        var jarat = this.jaratok.filter(function (j) { return j.id === foglalas.utasID; })[0];
        if (utas && jarat) {
            if (jarat.utasok.length < jarat.repulogep.ferohelyekSzama) {
                utas.foglalasok.push(jarat);
                jarat.utasok.push(utas);
                console.log("".concat(utas.nev, " helyet foglalt a ").concat(jarat.celallomas, " fel\u00E9 indul\u00F3 j\u00E1ratra."));
            }
            else {
                console.log("Tele a járat");
            }
        }
        else {
            console.log("Valami gond van kisöreg");
        }
    };
    Trepuloter.prototype.jaratLekerdezes = function (jaratID) {
        var jarat = this.jaratok.filter(function (j) { return j.id === jaratID; })[0];
        if (jarat) {
            console.log("Utaslista: ");
            jarat.utasok.forEach(function (u) {
                console.log(" - ".concat(u.nev));
            });
        }
        else {
            console.log("Nincs ilyen járat");
        }
    };
    Trepuloter.prototype.utasFoglalasai = function (utasID) {
        var utas = this.utasok.filter(function (u) { return u.id === utasID; })[0];
        if (utas) {
            console.log("Utaslista: ");
            utas.foglalasok.forEach(function (f) {
                console.log(" - ".concat(f.celallomas, " - ").concat(f.indulas));
            });
        }
        else {
            console.log("Nincs ilyen utas");
        }
    };
    return Trepuloter;
}());
exports.Trepuloter = Trepuloter;
