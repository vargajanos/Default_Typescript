import { TFoglalas } from "../interfaces/foglalas";
import { TJarat } from "../interfaces/jarat";
import { TRepulogep } from "../interfaces/repulogep";
import { TUtas } from "../interfaces/utas";


export class Trepuloter{
    private repulogepFlotta: TRepulogep[] = [];
    private jaratok: TJarat[] = [];
    private utasok: TUtas[] = [];
    
    repulogepHozzaadasa(repulogep:TRepulogep){
        this.repulogepFlotta.push(repulogep)
        console.log(`${repulogep.tipus} hozzáadva a flottához`);
    }

    jaratInditasa(jarat: TJarat){
        this.jaratok.push(jarat)
        console.log(`Járat indul ${jarat.celallomas}-ra ${jarat.indulas}`)
    }

    utasRegisztracio(utas: TUtas){
        this.utasok.push(utas);
        console.log(`Utas regisztrálva: ${utas.nev}. `);
    }

    foglalas(foglalas:TFoglalas){
        const utas = this.utasok.filter(u=>u.id === foglalas.utasID)[0]
        const jarat = this.jaratok.filter(j=>j.id === foglalas.utasID)[0]

        if (utas && jarat) {
            if (jarat.utasok.length < jarat.repulogep.ferohelyekSzama) {
                utas.foglalasok.push(jarat);
                jarat.utasok.push(utas);

                console.log(`${utas.nev} helyet foglalt a ${jarat.celallomas} felé induló járatra.`);
            }
            else{
                console.log("Tele a járat")
            }
        }
        else{
            console.log("Valami gond van kisöreg");
        }
    }

    jaratLekerdezes(jaratID:number){
        const jarat = this.jaratok.filter(j=>j.id === jaratID)[0];

        if (jarat) {
            console.log("Utaslista: ")
            jarat.utasok.forEach(u=>{
                console.log(` - ${u.nev}`)
            })
        }
        else{
            console.log("Nincs ilyen járat")       

        }
    }

    utasFoglalasai(utasID:number){
        const utas = this.utasok.filter(u=>u.id === utasID)[0]

        if (utas) {
            console.log("Utaslista: ")
            utas.foglalasok.forEach(f=>{
                console.log(` - ${f.celallomas} - ${f.indulas}`)
            })
        }
        else{
            console.log("Nincs ilyen utas")       

        }
    }

}