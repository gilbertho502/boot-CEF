
const boton = document.querySelector("#boton");
const color = document.querySelector("#texto");
const normal = document.querySelector("#regresar");

function texto(){
    color.style.color = 'green';
}
function regresar(){
    color.style.color = 'black';
}


boton.addEventListener('click', texto);
normal.addEventListener('click', regresar);