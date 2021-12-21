// FUNCIONES

//Ejercicio 1
function searchBigNumber(_array) {
    //Inicializar variables
    let numero_mayor = -Infinity;
    //Proceso
    for (let i = 0; i < _array.length; i++) {
      // 1022 > -infinito?
      if (_array[i] > numero_mayor) {
        numero_mayor = _array[i];
      }
    }
    //Return
    return numero_mayor;
}
  
  // MAIN
  //           0   1    2     3    4   5 ...                           12
let array = [
    -1, -100, -4005, -1022, -15, -23, -233, -5, -482, -545, -854, -499, -12,
];
  
console.log("El numero mayor es :", searchBigNumber(array));
  

  //Ejercicio 2
  //---------------------------------------------------------------------------------

function getLargestWord(_texto) {
    let words = _texto.split(" "); // arreglo de palabras
    let max_length = 0; // tamaño maximo
    let max_word = ""; // palabra larga
  
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      if (max_length < palabra.length) {
        max_word = palabra;
        max_length = palabra.length;
      }
    }
    return max_word;
  }
  
function getShortestWord(_texto) {
    let words = _texto.split(" "); // arreglo de palabras
    let min_length = Infinity; // tamaño minimo
    let min_word = ""; // palabra corta
  
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      // Infinity > 8 , 8 > 3 , 3 > 3 , 3 > 7
      if (min_length > palabra.length) {
        min_word = palabra;
        min_length = palabra.length;
      }
    }
    return min_word;
}
  
  // Main
  
let texto =
"Tratemos con una palabra grande para ver su longitud otorrinolaringología";
// obtener la palabra mas grande de un texto
let largest_word = getLargestWord(texto);
console.log(largest_word);
// mostrar el tamaño de esa palabra
console.log(largest_word.length);
  
let shortest_word = getShortestWord(texto);
console.log(shortest_word);
// mostrar el tamaño de esa palabra
console.log(shortest_word.length);

//---------------------------------------------------------------------------------

//Ejercicio 3

function isPalindromo(_frase) {
    let frase_sin_espacios = _frase.replaceAll(" ","")
    let array_chars = frase_sin_espacios.split("")
    //array_chars = (...frase_sin_espacio)
    
    //esto ya es un arreglo
    array_chars = Array.from(frase_sin_espacios)
    let reverse_array = array_chars.reverse()
    console.log(reverse_array.join(''))
    let frase_invertida = reverse_array.join("")//juntar los caracteres en un string
    console.log(frase_sin_espacios)
    console.log(frase_invertida)

    return frase_sin_espacios == frase_invertida
//     if (frase_sin_espacios = frase_invertida){
//         return true
//     }
//     else{
//         return false
//     }
    
}

let frase = "anita lava la tina"
let resultado = isPalindromo(frase)
console.log(`la frase ${frase}`, resultado? 'Es ' : 'No es ', 'un palindromo')
