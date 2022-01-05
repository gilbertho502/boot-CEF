// let consola = prompt("Ingresa tu saludo")
// const saludar = new Function(consola)
//saludar()


//ambas funciones son anonimas
//funcion autoejecutable
(function () {
  console.log("hola!!")
})();

//funcion autoejecutable con parametros
(function (name) {
  console.log(`hola ${name}!!`)
})("Gilberto");

//se retorna el valor
const saludo = (function (name) {
  return (`hola ${name}!!`)
})("Gilbertio");
console.log(saludo)

const fullname = (function (name, lastname) {
  return (`hola ${name} ${lastname}!!`)
})("Gilbertio", "rechoncho");
console.log(fullname)


//---------------------------------------------


// FUNCIONES DE FLECHA

// MANERA TRADICIONAL
function queDiaEs() {
  return "Martes 21 de Diciembre";
}
console.log(queDiaEs());
// ARROW FUNCTION MANERA EXTENDIDA
// const today = () => {
//   return "Martes 21 de Diciembre";
// };

// ARROW FUNCTION MANERA RESUMIDA
const today = () => "Martes 21 de Diciembre";

const todayAndGrettings = () => {
  console.log("Buen Dia");
  console.log("Martes 21 de Diciembre");
};

console.log(today());

//const haveANiceDay = day => {
//  console.log("Ten un lindo", day);
//  };

const haveANiceDay = (day) => {
  console.log("Ten un lindo", day);
};
haveANiceDay("Martes");

// Para devolver un objeto usamos ({ prop: value,..})
const auto = (_marca, _color) => ({
  name: "auto",
  marca: _marca,
  color: _color,
});

console.log(auto);


