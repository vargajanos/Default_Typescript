interface TUser{
    nev:string,
    egyenleg:number,
    szamlaszam: string
}

class TBankRendszer{
    private users: TUser[] = [];

    constructor(user?: TUser[]){
        if (user) {
            this.users = user
        }

    }


    befizet(szamlaszam:string, osszeg:number){
       let szamlam = this.users.filter(x=> x.szamlaszam == szamlaszam)[0]
       if (szamlam) {
           szamlam.egyenleg += osszeg;
        
           console.log(`${szamlam.szamlaszam} számlára, ${osszeg} Ft hozzáadva`)
       }
       else{
        console.log("Nincs ilyen számla")
       }
    }

    kivesz(szamlaszam:string, osszeg:number){
        let szamlam = this.users.filter(x=> x.szamlaszam == szamlaszam)[0]
        if (szamlam) {
            szamlam.egyenleg = szamlam.egyenleg - osszeg;
            if (szamlam.egyenleg < 0) {
                console.log("Nincs ennyi a számlán bolond\t")
                return;
            }

            console.log(`${szamlam.szamlaszam} számláró, ${osszeg} Ft kivéve`)
        }
     }
     kiir(szamlaszam:string){
        let szamlam = this.users.filter(x=> x.szamlaszam == szamlaszam)[0]
        if (szamlam) {
            console.log(`${szamlam.nev}-nak ennyi pénze van:  ${szamlam.egyenleg} Ft\n`)

        }
        else{
            console.log("Nincs ilyen számla")
        }
     }
    
}



const szemely = new TBankRendszer([
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



szemely.befizet("1234", 2000)
szemely.kiir("1234");
szemely.kivesz("1234", 1000)
szemely.kiir("1234");

szemely.befizet("12345", 200)
szemely.kiir("12345");
szemely.kivesz("12345", 100)
szemely.kiir("12345");

szemely.befizet("123456", 1000)
szemely.kiir("123456");
szemely.kivesz("123456", 12000)
szemely.kiir("123456");
