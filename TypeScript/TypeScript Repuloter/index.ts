import { Trepuloter } from "./classes/repuloter";
import { TJarat } from "./interfaces/jarat";
import { TRepulogep } from "./interfaces/repulogep";
import { TUtas } from "./interfaces/utas";

const repulogep1:TRepulogep= {
    id:1,
    tipus: 'Boeing 777',
    ferohelyekSzama: 200
}

const repulogep2:TRepulogep= {
    id:2,
    tipus: 'Airbus A320',
    ferohelyekSzama: 230
}

const repuloter = new Trepuloter();

repuloter.repulogepHozzaadasa(repulogep1);
repuloter.repulogepHozzaadasa(repulogep2);

const utas1:TUtas = {
    id:1,
    nev: "Csoki",
    foglalasok: []
}
const utas2:TUtas = {
    id:2,
    nev: "Áron",
    foglalasok: []
}
const utas3:TUtas = {
    id:3,
    nev: "Balázs",
    foglalasok: []
}
repuloter.utasRegisztracio(utas1);
repuloter.utasRegisztracio(utas2);
repuloter.utasRegisztracio(utas3);

const jarat1:TJarat={
    id:1,
    repulogep: repulogep1,
    celallomas: 'Dubai',
    indulas: new Date ('2024-10-23'),
    utasok: []
}
const jarat2:TJarat={
    id:2,
    repulogep: repulogep2,
    celallomas: 'Dusnok',
    indulas: new Date ('2024-10-24'),
    utasok: []
}

repuloter.jaratInditasa(jarat1);
repuloter.jaratInditasa(jarat2);

repuloter.foglalas({utasID: 1, jaratID: 2})
repuloter.foglalas({utasID: 2, jaratID: 2})
repuloter.foglalas({utasID: 2, jaratID: 1})

repuloter.jaratLekerdezes(1);
repuloter.utasFoglalasai(1);

