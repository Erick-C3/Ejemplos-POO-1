class Computadora{
    #siFunciona = "def si funciona";
    #perteneceA = "def pertenece a";

    // getter - setter
    getSiFunciona(){
        return this.#siFunciona;
    }

    setSiFunciona(siFunciona){
        this.#siFunciona = siFunciona;
    }

    getPerteneceA(){
        return this.#perteneceA;
    }

    setPerteneceA(pertenecaA){
        this.#perteneceA = pertenecaA;
    }

    iniciarOverClocking(){
        console.log("Iniciando overcloking en este equipo de " +  this.getPerteneceA());
    }

}

module.exports = Computadora;