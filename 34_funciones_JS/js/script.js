
//funcion saludar
function saludar(){
    //contenido de la funcion
    console.log("Hola soy una funcion")
}
//llamada de la funcion
saludar()

//----------------------------------------------

function sumar(){
    let suma = 2+2
    console.log("la suma es: ", suma)
    return suma
}

sumar()

//----------------------------------------------

//Tabla del 1 con funciones

function tabla_del_1(){
    for (let i=0; i<11; i++)
    console.log("1 x "+i+ "= "+ i)
}
tabla_del_1()

//----------------------------------------------

//   funciones con parametros dobles

// Caja de herrameintas (acciones) -> Funciones ()

function ver_estado_de_madera(estado){
    console.log("El estado de la madera es: ", estado)

}
function martillo(mesa){
    console.log("Estoy martillando una", mesa, "para probar su resistencia")
    mesa_final = "Mesa resistente(Prueba exitosa)"
    return mesa_final
}

function atornillador(piezas_orificios, n_tornillos){
    console.log("Estoy atornillando unas", piezas_orificios, "con", n_tornillos, "Tornillos")
    madera = "Mesa ensamblada"
    return madera
}

function sierra(madera){
    console.log("Estoy serruchando un ", madera)
    let piezas = "piezas de madera de "+ madera //roble
    return piezas
}

function taladro(piezas, broca){
    console.log("Estoy taladrand unas: ", piezas, 
    "con una broca de: ", broca)
    piezas_orificios = piezas + " con orificios de", broca //piezas de madera con orificios
    return piezas_orificios
}

// =============================================
//Programa principal

//paso 0, comprar la madera
let madera = "roble"
//voy a contruir una mesa
ver_estado_de_madera(madera)
//Paso 1cortar madera
madera = sierra(madera)
console.log(madera)
//Paso 2 Hacer huecos en las maderas
ver_estado_de_madera(madera)
let broca = "1/8"
madera = taladro(madera, broca)
//Pase 3: Unir las piezas
ver_estado_de_madera(madera)
let tornillos_1_8 = 20 
madera = atornillador(madera, tornillos_1_8)
//Paso 4: probar resistencia de la mesa
madera = martillo(madera) // mesa funcional


//-----------------------------------------------------


function tabladeluno(){
    for (i =0; i <=10; i++){
        console.log("1 x ", i, "= ", 1*i)
    }
}
for (j = 0; j<3; j++) {
    tabladeluno()
}

//------------------------------------------------------

function tabladel1(hasta){
    for (i =0; i <=hasta; i++){
        console.log("1 x ", i, "= ", 1*i)
    }
}
tabladel1(5)
tabladel1(9)

// ---------Parametros multiples

function tabladelx(tabla, hastaº){
    for (i =0; i <=hastaº; i++){
        console.log(tabla, "x", i, "=", tabla*i)
    }
}
tabladelx(6, 5)
tabladelx(2,10)
