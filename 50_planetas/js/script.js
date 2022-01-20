//async getters
async function getPlanetsData() {
    //1. hacer la peticion (GET)
    //URL: https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json")

    //2. validar la respuesta
    if (!response.ok) throw Error(response.statusText); //se detiene la ejecucion

    //3. transformar o entraer la info
    const data = await response.json()
    //4. devolver la informacion
    return data
}

//async getters
async function getastronautsData() {
    //1. hacer la peticion (GET)
    //URL: https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")

    //2. validar la respuesta
    if (!response.ok) throw Error(response.statusText); //se detiene la ejecucion

    //3. transformar o entraer la info
    const data = await response.json()
    //4. devolver la informacion
    return data
}


//main
async function main() {
    // obtener informacion de planetas
    planets = await getPlanetsData();
    let flag = true;
    planets.forEach((planet) => {
      const slides = document.querySelector("#carousel > .carousel-inner");
      console.log(slides);
      slides.innerHTML += ` 
          <div class="carousel-item ${flag?'active':'' }">
          <img
            src="${planet.image}"
            class="d-block w-100"
            alt="..."
          />
          </div> `;
      flag=false;
  });
}
  async function mainA() {
    // obtener informacion de planetas
    astronauta = await getastronautsData();
    let flag = true;
    astronauta.forEach((astronaut) => {
      const slides = document.querySelector("#astronautas > .carousel-inner");
      console.log(slides);
      slides.innerHTML += ` 
          <div class="carousel-item ${flag?'active':'' }">
          <img
            src="${astronaut.picture}"
            class="d-block w-100"
            alt="..."/>
          </div> `;
      flag=false;
  });
  }
//Llamar a la funcion principal

main();
mainA();