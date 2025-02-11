// 1. feladat: Auto interface

interface TAuto{
    marka:string,
    modell:string,
    evjarat: number,
    rendszam: string
}

//2. feladat: Autoflotta osztály
class TAutoFlotta{
    private autok:  TAuto[] = [];
    
    constructor(kezdoAutok?: TAuto[]){
        if (kezdoAutok) {
            this.autok = kezdoAutok
        }
    }

    hozzad(auto: TAuto):void{
        this.autok.push(auto);
        console.log(`${auto.marka} ${auto.modell} hozzáadva a flottához.`)
    }

    torol(rendszam: string){
       this.autok = this.autok.filter(x=> x.rendszam !== rendszam)

    }
    listaz():void{
        console.log('A flottában lévő autók:');
        this.autok.forEach(auto=>{
            console.log(`${auto.rendszam} ${auto.marka} ${auto.modell}, Évjárat: ${auto.evjarat}`)
        })
    }

}

//3. feladat: példányosítás

//4. feladat: Adj hozzá néhány autót a flottához, majd törölj egyet, és végül listázd ki a maradék autókat.


const flotta = new TAutoFlotta();

flotta.hozzad({
    marka: 'Audi',
    modell: 'R8',
    evjarat: 2010,
    rendszam: "12345"

})

flotta.hozzad({
    marka: 'Tesla',
    modell: 'Model 3',
    evjarat: 2020,
    rendszam: "123456789"
    
})

flotta.hozzad({
    marka: 'Tesla',
    modell: 'Model Y',
    evjarat: 2023,
    rendszam: "123"
    
})

flotta.listaz();

flotta.torol('12345')

flotta.listaz();