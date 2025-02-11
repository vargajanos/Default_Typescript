"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repuloter_1 = require("./classes/repuloter");
var repulogep1 = {
    id: 1,
    tipus: 'Boeing 777',
    ferohelyekSzama: 200
};
var repulogep2 = {
    id: 2,
    tipus: 'Airbus A320',
    ferohelyekSzama: 230
};
var repuloter = new repuloter_1.Trepuloter();
repuloter.repulogepHozzaadasa(repulogep1);
repuloter.repulogepHozzaadasa(repulogep2);
var utas1 = {
    id: 1,
    nev: "Csoki",
    foglalasok: []
};
var utas2 = {
    id: 2,
    nev: "Áron",
    foglalasok: []
};
var utas3 = {
    id: 3,
    nev: "Balázs",
    foglalasok: []
};
repuloter.utasRegisztracio(utas1);
repuloter.utasRegisztracio(utas2);
repuloter.utasRegisztracio(utas3);
var jarat1 = {
    id: 1,
    repulogep: repulogep1,
    celallomas: 'Dubai',
    indulas: new Date('2024-10-23'),
    utasok: []
};
var jarat2 = {
    id: 2,
    repulogep: repulogep2,
    celallomas: 'Dusnok',
    indulas: new Date('2024-10-24'),
    utasok: []
};
repuloter.jaratInditasa(jarat1);
repuloter.jaratInditasa(jarat2);
repuloter.foglalas({ utasID: 1, jaratID: 2 });
repuloter.foglalas({ utasID: 2, jaratID: 2 });
repuloter.foglalas({ utasID: 2, jaratID: 1 });
repuloter.jaratLekerdezes(1);
repuloter.utasFoglalasai(1);
