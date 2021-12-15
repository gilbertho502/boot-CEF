//Forma tradicional
let ARRAY = new Array("a", "b", "c")
console.log(ARRAY)
//Mediante literales
const array = ["a",  "b" ,"c"] //array con 3 elementos
const empty = [] // Array vacio (0 elementos)
const mixto = ["a", 5, true] //Array mixto (string, number, boolean)

console.log( array, empty, mixto)

let razas = ["poodle", "labrador", "terrier", "shihtzu"]
razas[0] //poodle
razas[1] //labrador
razas[2]
razas[3] //shihtzu 4 <= lenghth
console.log(razas[2]) // terrier
console.log(razas[5]) //undefined
let nro_razas = razas.length 

razas[nro_razas-1]
//         4  -    1 = 3
razas[razas.length-1]

console.log(razas) //undefined
//propiedad o atributo => obj.propiedad
//funcion o metodo => obj.funcion()
// obj  .  metodo
console.log()

let num_razas = razas.length
console.log("Numero de razas: ", num_razas)

/*
 * Añadir o eliminar elementos
 */

let array3 = ["a", "b", "c"] //array inicial
console.log(array3) 
array3.push("d") //devulve 4. agrega la d al final
console.log(array3)
array3.pop()    //elimina la d
console.log(array3) 
array3.unshift("Z") //agrega la z al inicio
console.log(array3)
array3.shift() //elimina la Z del inicio
console.log(array3)

/**
 * Push vrs Concat
 */
let array4 = [1,2,3]
array4.push(4,5,6)
console.log(array4)
array4.push([7,8,9])
console.log(array4)

let array5 = [1,2,3]
array5 = array5.concat(4,5,6) 
console.log(array5)
array5 = array5.concat([7,8,9])
console.log(array5)

/**
 * Metodo slice
 */
let array6 = ["a", "b","c","d","e"]
console.log(array6.slice(2,4))

/**
 * Metodo splice
 */
const array7 = ["a", "b","c","d","e"]
console.log("Mostrar cambio", array7.splice(2,4))
console.log("Cambio 1: ", array7)
console.log("Mostrar cambio 2", array7.splice(1,0, "z","x"))
console.log("cambio 3: ", array7);

 /**
  * Busqueda y comprobacion
  */
const array8 = [5,10,15,20,25]
console.log(Array.isArray(array8)) //true
console.log(array8.includes(10)) //true
console.log(array8.includes(10,2)) //false
console.log(array8.indexOf(25)) //4
console.log(array8.lastIndexOf(10,0)) //-1

console.log()

const sports = [
     "golf", 
     "basketball",
     "tenis",
     "surfing",
     "arqueria",
     "karate",
     "ciclismo",
     "basketball"]

const colores =  "rojo, verde, azul";  
//validar que una variables es del tipo array
 if (Array.isArray(sports)){
     console.log("Sports Es un arreglo")
 }
 else{
     console.log("Sports No es un arreglo")
 }

 if (Array.isArray(colores)){
    console.log("Colores Es un arreglo")
}
else{
    console.log("Colores No es un arreglo")
}


if (sports.includes("arqueria")) {
    console.log("el deporte arqueria existe en la lista")
} else {
    console.log("El deporte arqueria no existe en  la lista")
}

if (sports.includes("box")) {
    console.log("el deporte box existe en la lista")
} else {
    console.log("El deporte box no existe en  la lista")
}

// Obtener la posicion de un elemento .indexOf() 

console.log(sports.indexOf("karate"))
console.log(sports.indexOf("judo")) //-1 => No lo encontreº

//La posicion de la ultima aparicion

console.log(sports.lastIndexOf("basketball")) //1
//                           elemento,   hasta: 4
console.log(sports.lastIndexOf("karate", 4)) //-1


/**
 * Ordenaciones
 */

const array9 = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"]

let sort = array9.sort()
console.log("Ordenacion alfabetica: ", sort)
let reverse = array9.reverse()
console.log("orden inversa: ", reverse)

//--------------------------------------------------------------------------

const array10 = [1,8,2,32,9,7,4]
//funcion de comparacion para ordenacion natural
const fc = function (a,b) {
    return a - b
}

console.log("menor a mayor: ",array10.sort(fc))

const fc1 = function (a,b) {
    return b-a
}

console.log("mayor a menor: ",array10.sort(fc1))