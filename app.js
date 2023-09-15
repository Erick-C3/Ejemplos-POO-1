const Computadora = require("./Computadora.js");

const pcCasa1 = new Computadora();
const pcTrabajo = new Computadora();

/* pcCasa1.siFunciona = true;
pcTrabajo2.siFunciona = false; */
pcCasa1.setSiFunciona(true);
pcTrabajo.setSiFunciona(false);
pcCasa1.setPerteneceA("Erick");

console.log( pcCasa1.getSiFunciona() );
console.log( pcCasa1.getPerteneceA() );

pcCasa1.iniciarOverClocking();

console.log( pcTrabajo.getSiFunciona() );
console.log( pcTrabajo.getPerteneceA() );

pcTrabajo.iniciarOverClocking();
