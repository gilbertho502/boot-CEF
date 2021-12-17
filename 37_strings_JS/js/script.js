let texto = " amor "

console.log(texto.repeat(3))
console.log(texto.toLocaleLowerCase)
console.log(texto.toLocaleUpperCase)

let frase = "anita lava la tina"
frase = new String("la ruta nos aporto otro paso natural")

console.log(frase)

console.log(frase.replace("a", "u"))
console.log(frase.replaceAll("la", "{replaced}"))

console.log(frase.substr(19))
console.log(frase.substr(29,7))

console.log(frase.substring(19))
console.log(frase.substring(29,7))

let direccion = new String ("URB los patos 305")
console.log(direccion)
let numero_casa = direccion.substr(14,3)
console.log(numero_casa)

let palindromo = new String("a luna ese anula")
console.log(palindromo)
console.log(palindromo.substring(7)) //ese anula
console.log(palindromo.substring(11,16)) //anula


//convertir string a arreglo
let palindromo3 = new String("A mama, ROMA LE AVIVA EL AMOR A papa, Y A papa, ROMA LE AVIVA EL AMOR A mama")
console.log(palindromo3)

console.log(palindromo3.split(",")) //separacion por las comas
console.log(palindromo3.split(" "))

//Rellenando caracteres a la izquierda y derecha

let palabra = new String( "ocaso" )

console.log(palabra.padStart(10,"*"))
console.log(palabra.padEnd(10,"*"))

//---------------------------------------------------------------------------------------------------------------------


let arreglo = [1,2,3,4,5,6,7]
//let arreglo2 = new Array(1,2,3,4)
    //vamos a recorrer desde i=0 hasta 7 de uno en uno
for (let i = 0; i< arreglo.length; i++) {
    console.log(`pos[=${i}]: `, arreglo[i])
}

for (let j = arreglo.length-1; j>=0; j--) {
    console.log(`pos[=${j}]: `, arreglo[j])
}
console.log("")

//ejercicio 1

const array = [1,100,200,2,15,23,233,5,555,854,999,12]

const fc = function (a,b) {
    return b -a 
}

array.sort(fc)
console.log("el numero mayor es: " , array[0])



let str =  "tratemos con una palabra grande a ver su longitud: ottorriringolo"
console.log(str)
let arreglo1 = str.split(" ")
console.log("nuevo arreglo: ",arreglo1)

for (let k =0; k<arreglo1.length; k++) {
    console.log("valor es: ",arreglo1[k])
    console.log("cantidad de letras: ", arreglo1[k].length)
    datos = parseInt( arreglo1[k].length)
    console.log(datos)
    let array10 = new Array(datos) 
    console.log(array10)
}
