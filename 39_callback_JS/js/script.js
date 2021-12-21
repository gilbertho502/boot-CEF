const fb = function () {
  console.log("funcion B ejecutada")
}

const fa = function (callback) {
  console.log("funcion a ejecutada")
  callback()
}
fa(fb)

// RECETA DE UNA ENSALADA
let vegetales = ["zanahoria", "lechuga", "tomate"];

// Hacer una ensalada
// 1. Seleccionar vegetales
// 2. Cortar vegetales
// 3. Mezclarlos
// 4. Aderezar todo

// Funciones

const cortarVegetales = function () {
  console.log("Cortar:", vegetales);
};
const mezclarVegetales = function (cortar) {
  cortar();
  console.log("Mezclar:", vegetales);
};
const aderezarVegetales = function (mezclar, cortar) {
  mezclar(cortar);
  console.log("Aderezando", vegetales);
};

function prepararEnsalada() {
  aderezarVegetales(mezclarVegetales, cortarVegetales);
}

// Main

prepararEnsalada();


//---------------------------------------------------------------------------

function myDisplayer(some) {
  console.log(some)
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2
  myCallback(sum)
  
}

myCalculator(5,3,myDisplayer)


//===========================================================================

function sumar(x,y) {
  return x+ y
}
function mult(x,y) {
  return x * y
}
function dividir(x,y) {
  return x / y
}
function area_triangulo(sum_callback, mult_callback,div_callbak) {
  let area = 0
  let base = 10, altura =20

  area = div_callbak( mult_callback(base, altura),2)
  return area
}

area_triangulo(sumar, mult, dividir)
console.log(area_triangulo(sumar, mult, dividir))

//===============================================================================

const saludo = ()=>{
  console.log("Hola a todos")
}

setTimeout(saludo, 3000)

saludo()

//-------------------------------------------------------------------------------

function traer_users(callback) {
  console.log("loading...")
  setTimeout (() =>{
    let response =['Julissa', 'Nicolle','Gilberto']
    callback(response)
  },3000)
}

function mostrar_users(users) {
  console.log(users)
  
}

traer_users(mostrar_users)

//===================================================================

//receta de panqueques
let estado = "Ingredientes";

// Hacer un panqueque
// 1. Mezclar ingredientes
// 2. Hornear
// 3. Decorar
// 4. Comer

// Funciones

function mezclar() {
  estado = "Mezcla lista";
  console.log(estado);
  hornear(decorar);
}
function hornear(_decorar) {
  console.log("Horneando...");
  setTimeout(() => {
    estado = "Panqueque horneado";
    console.log(estado);
    _decorar(comer);
  }, 2000);
}
function decorar(_comer) {
  console.log("Decorando...");
  setTimeout(() => {
    estado = "Panqueque decorado";
    console.log(estado);
    _comer();
  }, 2000);
}

function comer() {
  console.log(estado, "y listo para comer");
}

function prepararPaqueque() {
  estado = "Listo para empezar";
  console.log(estado);
  mezclar();
}

prepararPaqueque();
