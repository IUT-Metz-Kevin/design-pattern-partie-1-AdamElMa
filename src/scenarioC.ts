interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interargir(): void;
  }


class Clavier implements ControlerActions {

    private t_saut: string;
    private t_atak: string;
    private t_int: string;

    constructor(){
        this.t_saut = " ";
        this.t_atak = "G";
        this.t_int = "D";
    }

    public sauter(): void {
        console.log("Saute");
    }

    attaquer(): void {
        console.log("Attaque");
    }

    interargir(): void {
        console.log("boom");
    }
}

class Xbox implements ControlerActions {

    private t_saut: string;
    private t_atak: string;
    private t_int: string;

    constructor(){
        this.t_saut = "A";
        this.t_atak = "B";
        this.t_int = "X";
    }

    sauter(): void {
        console.log("Saute");
    }

    attaquer(): void {
        console.log("Attaque");

    }

    interargir(): void {
        console.log("boom");

    }
}

class PS5 implements ControlerActions {

    private t_saut: string;
    private t_atak: string;
    private t_int: string;

    constructor(){
        this.t_saut = "X";
        this.t_atak = "O";
        this.t_int = "T";
    }

    sauter(): void {
        console.log("Saute");
    }

    attaquer(): void {
        console.log("Attaque");

    }

    interargir(): void {
        console.log("boom");

    }
}