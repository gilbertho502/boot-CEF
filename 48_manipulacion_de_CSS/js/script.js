const boton = document.querySelector("#boton")
console.log(boton)

boton.addEventListener("click",() => {
  //Way #1 asignar una clase directamente
  boton.className = "bg"
  console.log(boton.classList)
  //boton.classList.add("bg",) //agrega esta clase "bg"

  //Way #2 utilizando set atribute
  boton.setAttribute("class", "bg")




//const boton = document.querySelector("#boton");

//boton.addEventListener("click", () => {
  /* # Way 01 -> asignar una clase directamente 
a través de las propiedades del element */

  // console.log(boton.className);
  // boton.className = " bg";
  // console.log(boton.className);

  /*  #Way 02 -> utilizando setAttribute */

 // console.log(boton.getAttribute("class"));
 // boton.setAttribute("class", "bg");
 // console.log(boton.getAttribute("class"));
//});

const caja = document.querySelector("#alone")


caja.className;
console.log(caja.className);

//caja.className = "bloque"

caja.setAttribute("class", "bloque")

caja.classList;
console.log(caja.classList);

const caja = document.querySelector("#alone_box");

console.log(caja.className); // box contenedor
console.log(caja.getAttribute("class")); // box contenedor

// caja.className = "bloque"; // remplazar por "bloque"
// console.log(caja.className);

caja.setAttribute("class", "bloque"); // remplazar por "bloque"

//caja.classList;
console.log(caja.classList); // [box, contenedor]


//-------------------------------------------------------------------------------


caja.classList.add("bold") //agregua uno por uno
caja.classList.add("bold", "color-green") //agrega todos
//eliminar
caja.classList.remove("contenedor") //eliminar uno
caja.classList.remove("contenedor", "bold") //eliminar varios


//-----------------------------------------------------
caja.classList.toggle("bg", true)// add
caja.classList.toggle("bg", false) //remove
