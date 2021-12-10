let numero = Math.round(Math.random() * 6 + 1);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");


let numero = Math.round(Math.random() * 6 + 1);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");

function validarNumero() {
  switch (numero) {
    case 1:
      // Dibujar lado del dado => 1
      obj_dado.innerHTML = "<img src='images/1.png' />";
      break;
    case 2:
      obj_dado.innerHTML = "<img src = 'images/2.png' />";
      break;
    case 3:
      obj_dado.innerHTML = "<img src = 'images/3.png' />";
      break;
    case 4:
      obj_dado.innerHTML = "<img src = 'images/4.png' />";
      break;
    case 5:
      obj_dado.innerHTML = "<img src = 'images/5.png' />";
      break;
    case 6:
      obj_dado.innerHTML = "<img src = 'images/6.png' />";
      break;
  }
}

obj_dado.innerHTML = "<img src='images/rolling.gif' />";

setTimeout(validarNumero, 2000);

obj_mensaje.innerHTML = "El numero es : " + numero;



// setTimeout(()=>{

//   switch (numero) {
//     case 1:
//       // Dibujar lado del dado => 1
//       obj_dado.innerHTML = "<img src='images/1.png' />";
//       break;
//     case 2:
//       obj_dado.innerHTML = "<img src = 'images/2.png' />";
//       break;
//     case 3:
//       obj_dado.innerHTML = "<img src = 'images/3.png' />";
//       break;
//     case 4:
//       obj_dado.innerHTML = "<img src = 'images/4.png' />";
//       break;
//     case 5:
//       obj_dado.innerHTML = "<img src = 'images/5.png' />";
//       break;
//     case 6:
//       obj_dado.innerHTML = "<img src = 'images/6.png' />";
//       break;
//   }

// }, 2000
// )
// obj_mensaje.innerHTML = "El numero es: " +numero


//=======================================================

//----------Tercera opcion
let numero = Math.round(Math.random() * 6 + 1);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");

function validarNumero(copy_numero, copy_obj_dato) {
  switch (copy_numero) {
    case 1:
      // Dibujar lado del dado => 1
      copy_obj_dato.innerHTML = "<img src='images/1.png' />";
      break;
    case 2:
      copy_obj_dato.innerHTML = "<img src = 'images/2.png' />";
      break;
    case 3:
      copy_obj_dato.innerHTML = "<img src = 'images/3.png' />";
      break;
    case 4:
      copy_obj_dato.innerHTML = "<img src = 'images/4.png' />";
      break;
    case 5:
      copy_obj_dato.innerHTML = "<img src = 'images/5.png' />";
      break;
    case 6:
      copy_obj_dato.innerHTML = "<img src = 'images/6.png' />";
      break;
  }
}

_dado.innerHTML = "<img src='images/rolling.gif' />";

setTimeout(validarNumero, 2000, numero, obj_dado);

obj_mensaje.innerHTML = "El numero es : " + numero;


//===========================================================

//----------Cuarta Opcion -----------------------------------

let numero = Math.round(Math.random() * 6 + 1);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");

function validarNumero(copy_numero, copy_obj_dato) {
  copy_obj_dato.innerHTML = `<img src='images/${copy_numero}.png' />`;
}

obj_dado.innerHTML = "<img src='images/rolling.gif' />";

setTimeout(validarNumero, 2000, numero, obj_dado);

obj_mensaje.innerHTML = "El numero es : " + numero;


