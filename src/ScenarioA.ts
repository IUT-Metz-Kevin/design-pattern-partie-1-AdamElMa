class Parametre {

    private static instance: Parametre;


    private _Difficulté: string;
    private _Langue: string;
    private _Volume_musique: number;
    private _Volume_effets: number;
    private _Resolution: string;
    private _Qualité: string;

    private constructor(){
        this._Difficulté = "";
        this._Langue = "";
        this._Qualité = "";
        this._Resolution = "";
        this._Volume_effets = 50;
        this._Volume_musique = 50;
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new Parametre();
        return this.instance;
    }

    get Difficulté(): string{
        return this._Difficulté;
    }
    set Difficulté(dif: string){
        this.Gameplay_settings_Dif(dif);
    }
    
    get Langue(): string{
        return this._Langue;
    }
    set Langue(la: string){
        this._Langue = la;
    }

    get Qualité(): string{
        return this._Qualité;
    }
    set Qualité(qua: string){
        this._Qualité = qua;
    }

    get Resolution(): string{
        return this._Resolution;
    }
    set Resolution(re: string){
        this._Resolution = re;
    }

    get Volume_ef(): number{
        return this._Volume_effets;
    }
    set Volume_ef(ef: number){
        this.Audio_settings(ef);
        this._Volume_effets = ef;
    }

    get Volume_mus(): number{
        return this._Volume_musique;
    }
    set Volume_mus(mus: number){
        this.Audio_settings(mus);
        this._Volume_musique = mus;
    }




    

    public Gameplay_settings_Dif(nivDif: string):void{
        if (nivDif == "Facile" || nivDif == "Normal" || nivDif == "Difficile"){
            this.Difficulté = nivDif; 
        }  
        else { console.log("Le niveau de diffulté n'existe pas")}      
    }

    public Audio_settings(volume: number): void{
        if ( volume < 0 || volume > 100){
            console.log("Le volume ne peut dépasser les limites");
        }
    }

    public __toString(){
        let chaine = "";

        chaine += "Difficulté : " + this.Difficulté + " ," + " Langue : " + this.Langue + " ," + " Volume musique : " + this.Volume_mus + " ," + " Volume effet : " + this.Volume_ef + " ," + " Resolution : " + this.Resolution + " ," + " Qualité graphique : " + this.Qualité; 
    }
}


const instance1 = Parametre.getInstance();
const instance2 = Parametre.getInstance();

console.log(instance1 === instance2);