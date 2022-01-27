import CLIENT from "./modules/client.js"
import STORAGE from "./modules/store.js"
import DOM from "./modules/dom.js"

import {comicRender} from "./modules/renders.js"

// Crear la funcion main para consumir el recurso...
async function main() {
  // Obtenemos ID almacenado en el storage
  const product_id = STORAGE.get("product_id");
  // Obtener la data del servidor para ese ID
  const data = await CLIENT.sendRequest("comics/"+product_id);
  // Trasformar la data en Información relevante 
  const comic =  comicRender(data);
  console.log(comic);
  //Actualizar información del HTML

  const card = DOM.find("#comic_card"); // Busqueda en documento
    
  DOM.find("#comic_image").src = comic.image ;
  DOM.find("#title",card).textContent = comic.title; // Busqueda dentro de card
  DOM.find("#price",card).textContent = "$" + comic.price.sale;
  DOM.find("#format",card).textContent = comic.format;
  DOM.find("#description",card).innerHTML = comic.description;
  DOM.find("#stock",card).innerHTML = comic.stock;
  // Enlistamos los creadores
  comic.creators.forEach(({name,role})=>{
    const li = DOM.create("li")
    li.textContent = `${name} - ${role}`
    DOM.find("#creators",card).appendChild(li);
  })

  DOM.find("#btn_add").addEventListener('click',()=>{
    const {id,title,price:{sale}} = comic;
    STORAGE.setArray('cart',{id,title,sale});
    window.location.href = "index.html"
  })
  
}

main();
