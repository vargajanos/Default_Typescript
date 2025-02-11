var TBankRendszer = /** @class */ (function () {
    function TBankRendszer(user) {
        this.users = [];
        if (user) {
            this.users = user;
        }
    }
    TBankRendszer.prototype.befizet = function (szamlaszam, osszeg) {
        var szamlam = this.users.filter(function (x) { return x.szamlaszam == szamlaszam; })[0];
        if (szamlam) {
            szamlam.egyenleg += osszeg;
            console.log("".concat(szamlam.szamlaszam, " sz\u00E1ml\u00E1ra, ").concat(osszeg, " Ft hozz\u00E1adva"));
        }
        else {
            console.log("Nincs ilyen számla");
        }
    };
    TBankRendszer.prototype.kivesz = function (szamlaszam, osszeg) {
        var szamlam = this.users.filter(function (x) { return x.szamlaszam == szamlaszam; })[0];
        if (szamlam) {
            szamlam.egyenleg = szamlam.egyenleg - osszeg;
            if (szamlam.egyenleg < 0) {
                console.log("Nincs ennyi a számlán bolond\t");
                return;
            }
            console.log("".concat(szamlam.szamlaszam, " sz\u00E1ml\u00E1r\u00F3, ").concat(osszeg, " Ft kiv\u00E9ve"));
        }
    };
    TBankRendszer.prototype.kiir = function (szamlaszam) {
        var szamlam = this.users.filter(function (x) { return x.szamlaszam == szamlaszam; })[0];
        if (szamlam) {
            console.log("".concat(szamlam.nev, "-nak ennyi p\u00E9nze van:  ").concat(szamlam.egyenleg, " Ft\n"));
        }
        else {
            console.log("Nincs ilyen számla");
        }
    };
    return TBankRendszer;
}());
var szemely = new TBankRendszer([
    {
        nev: "Csoki",
        egyenleg: 0,
        szamlaszam: "1234"
    },
    {
        nev: "Áron",
        egyenleg: 400,
        szamlaszam: "12345"
    },
    {
        nev: "Balázs",
        egyenleg: 30000,
        szamlaszam: "123456"
    }
]);
szemely.befizet("1234", 2000);
szemely.kiir("1234");
szemely.kivesz("1234", 1000);
szemely.kiir("1234");
szemely.befizet("12345", 200);
szemely.kiir("12345");
szemely.kivesz("12345", 100);
szemely.kiir("12345");
szemely.befizet("123456", 1000);
szemely.kiir("123456");
szemely.kivesz("123456", 12000);
szemely.kiir("123456");
