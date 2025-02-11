interface TKonyv{
    cim:string
    szerzo:string
    kiadasEve:number
    kategoriak:string[]
    ISBN:number

}

class TKonyvtar{
    private konyvek:TKonyv[] = [];

    constructor(konyv?: TKonyv[]){
        if (konyv) {
            this.konyvek = konyv
        }
    }

    hozzaad(konyv: TKonyv){
        this.konyvek.push(konyv);
        console.log(`${konyv.cim} hozzáadva a könyvekhez.`)
    }

    torol(isbn:number){
        this.konyvek = this.konyvek.filter(x=>x.ISBN !== isbn);
        console.log(`${isbn} ez a könyv törölve`)

    }

    listaz(){
        console.log("Összes könyv: \n")
        this.konyvek.forEach(konyv=>{
            console.log(`Cím: ${konyv.cim} Szerző: ${konyv.szerzo} Kiadás éve: ${konyv.kiadasEve} Kategoriák: ${konyv.kategoriak}`)
        })

    }

}


const konyvtar = new TKonyvtar();

konyvtar.hozzaad({
    cim: 'Kedvenc',
    szerzo: 'Csoki',
    kiadasEve: 2010,
    kategoriak: ["finom", "jo"],
    ISBN: 1

})

konyvtar.hozzaad({
    cim: 'Finom',
    szerzo: 'Áron',
    kiadasEve: 2010,
    kategoriak: ["jo"],
    ISBN: 2

})

konyvtar.hozzaad({
    cim: 'Jó',
    szerzo: 'Blázs',
    kiadasEve: 2010,
    kategoriak: ["szep", "xx", "ddd"],
    ISBN: 3

})

konyvtar.listaz();

konyvtar.torol(1)

konyvtar.listaz();