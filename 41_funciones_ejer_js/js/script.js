
//-----------------------------------------------------
function creaSumador(x) {
  return function (y) {
    return x + y
  }
}
var suma5 = creaSumador(5)
var suma10 = creaSumador(10)

// console.log(suma5(2))
// console.log(suma10(2))

//------------------------------------------------------

const array = [5,8]
let sum = 0
let suma = 0
let total = 0
for (let i =0; i<array.length; i++){
  sum += array[i]
  let dato1 = array[0]+1
  let dato2 = array[1]-1
  suma = dato1 + dato2
  total = sum+suma
}
console.log(sum)
console.log(suma)
console.log(total)

//----Ejercicio 2---

function nueva_oracion(_sentence, _wordToReplace, _replaceWord) {
   let frase = ""
   frase = _sentence.replace(_wordToReplace, _replaceWord)
   return frase
}

let sentence = "El lunes es un gran dia para programar"
let wordToReplace = "lunes"
let replaceWord = "viernes"

let nuevo = nueva_oracion(sentence, wordToReplace, replaceWord)
console.log(nuevo)

//------Ejercicio 3-----------

function restar(_array) {
  
}

let array = [7,3,2,-1]