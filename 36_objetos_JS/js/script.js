const objeto = new Object() //forma tradicional

const objeto2 = {}  //manera resumida o literal

const player0 = {
    //atributos
    name: "Manz",
    lives: 99,
    strength: 10,
}

console.log(player0.name)
console.log(player0.lives)
console.log(player0["name"])
console.log(player0["lives"])

//------------------------------------------

let carro = {
    //atributos:
    color: "blanco",
    marca: "toyota",
    modelo: "corolla",
    kilometros: 0,
    año: 2021,
    cantidad_puertas: 4,
    nuevo: true,
    gasolina: true,
    automatico: false,
    //metodos
    arrancar(){
        return "Estoy arrancando..."
    },

    acelerar(){
        return "Estoy acelerando..."
    },
    frenar(){
        return "Estoy frenando..."
    },
}

console.log(carro.año)
console.log(carro.frenar) //me devuelve todo el codigo de la funcion
console.log(carro.arrancar())
console.log(carro.frenar())

/**
 * Añadir propiedades
 */

const celular = {}

celular.marca = "Xiaomi"
celular.modelo = "note"
celular.color = "negro"
celular.sim = 2
celular.almacenamiento= 128
celular.camaras = 4 
celular.led = true

console.log(celular.marca)

//---------------------------------------------------------------------------

//colocando metodos fuera del constructor
const player = {};

player.name = "Messi";
player.country = "Argentina";
player.old = 32;
//Métodos
player.marcado = () => {
  return "ha anotado";
};
player.marcado = function (){
    return "ha anotado";
};


//---------------------------------------------------------------------------
let estadio = {
    //atributos
    name : "lusail",
    country: "Qatar",
    aforo: 80000,
    competencia: "copa del mundo",
    //metodos

    match(equipo_A, equipo_B){
        let goles_A = 0
        let goles_B = 0
        let resultado = ""
        let puntos = 0
        //inicia el partido
        goles_A = Math.round( Math.random()*5) // 0-5
        goles_B = Math.round( Math.random()*5) // 0-5
        //Final del partido
        equipo_A.goles +=goles_A
        equipo_B.goles = equipo_B.goles+ goles_B

        //calculo de puntos
        if (goles_A > goles_B) {
           puntos = 3
            equipo_A.puntos +=puntos
            console.log("gano: " , equipo_A.name)
        }
        if (goles_A < goles_B) {
            puntos = 3
            equipo_B.puntos +=puntos
        }
        if (goles_A == goles_B) {
            puntos = 1
            equipo_A.puntos +=puntos
            equipo_B.puntos +=puntos
        }

        
        

        resultado = ` ${equipo_A.name} VS ${equipo_B.name} Score : ${goles_A} - ${goles_B}`
        
        return resultado
    }
}

let team_psg = {
    name: "psg",
    contry: "francia",
    color: "azul y blanco",
    goles : 0,
    puntos: 0,
}

let team_cristal = {
    name: "cristal",
    contry: "peru",
    color: "celeste",
    goles : 0,
    puntos: 0,
}
let team_america= {
    name: "america",
    contry: "mexico",
    color: "blanco y azul",
    goles : 0,
    puntos: 0,
}

let team_cremas = {
    name: "cremas",
    contry: "guatemala",
    color: "blanco",
    goles : 0,
    puntos: 0,
}


//MAIN


console.log(estadio.match(team_america, team_psg))
console.log(estadio.match(team_america, team_cremas))
console.log(estadio.match(team_america, team_cristal))


console.log("puntos america: ",team_america.puntos)
console.log("puntos psg: ",team_psg.puntos)
console.log("puntos cristal: ",team_cristal.puntos)
console.log("puntos cremas: ",team_cremas.puntos)