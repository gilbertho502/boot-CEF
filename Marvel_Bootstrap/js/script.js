const APIKEY = "d32c6bcd63e466cafed347920ea1ceb4"; // Public Key
const HASH = "e3d587be462649735e2f9733aa6418da"; // md5(ts+privateKey+publicKey) -> https://www.md5hashgenerator.com
const TS = "1";
const URL = "https://gateway.marvel.com/v1/public/";
//const URL = "data/";

async function sendRequest(path) {
  // 1. Hacer Peticion
  const response = await fetch(
    URL + path + "?ts=" + TS + "&apikey=" + APIKEY + "&hash=" + HASH
  );
  // Validar la respuesta
  if (!response.ok) throw Error(response.statusText);
  // Extraer la información
  const json = await response.json();
  return json.data.results;
}

// Crear la funcion main para consumir el recurso...
async function main() {
  const comics = await sendRequest("comics");
  //const comics = await sendRequestLocal("comics");
  console.log(comics);
  //PROCESAR INFORMACION

  const container = document.getElementById("card_container");

  comics.forEach((comic) => {
    const template = document.querySelector("#card_template");

    const clone = template.cloneNode(true);
    clone.removeAttribute("style"); // removiendo el diplay:none

    // VALIDACION DE COMICS SIN IMAGEN
    if (comic.thumbnail.path.includes("image_not_available")) {
      return;
    }
    // CARGAR IMAGEN
    clone
      .querySelector(".comic_img")
      .setAttribute(
        "src",
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      );
    // SETEAR TITULO
    clone.querySelector(".comic_name").textContent = comic.title;

    // Calcular precio
    let original_price =
      comic.prices[0].price == 0 ? 2.99 : comic.prices[0].price; // TERNARIO
    // SETEAR PRECIO ORIGINAL
    clone.querySelector(".comic_ori_price").textContent =
      original_price;

    // SETEAR PRECIO TOTAL
    clone.querySelector(".comic_price").textContent = (
      original_price - 2.0
    ).toFixed(2); // 1.0

    // Acción al botón
    clone
      .querySelector(".comic_button")
      .addEventListener("click", () => {
        localStorage.setItem("product_id", comic.id);
        window.location.href = "product.html";
        //window.open("/product.html", "_blank");
      });

    container.appendChild(clone);
  });
}

main();
