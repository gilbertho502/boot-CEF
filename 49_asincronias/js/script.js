function timeout(sec) {
    return new Promise(resolve => setTimeout(resolve,sec*1000))
}

async function getUsersData() {
  // Traer informacion del servidor
  await timeout(3)

  const options = {
    method: "GET",
    headers: {
      "content-Type": "application/json"
    },
    
  }
  const response = await fetch("data/users.json",options);
  // Validamos la respuesta
  if (!response.ok) {
    // Promesa se rechazo
    throw Error(response.statusText);
  }
  // Extraer la data
  const data = await response.json();
  return data;
}

// MAIN (Estructrurado -> Síncrono)
async function main() {
  const users = await getUsersData()
  .catch((err)=> console.warn(err))
  const list = document.querySelector("#list_users");

  users.forEach((element) => {
    const p = document.createElement("p");
    p.textContent = `${element.first_name} ${element.last_name} : ${element.email}`;
    list.appendChild(p);
  });
}

main();

function displayOnConsole(message = "Hello") {
  console.log(`Message : '${message}' was sent after 5 seconds`);
}

function stopProcess(_id) {
  console.log("el proceso", _id, "se ha detenido");
  clearInterval(_id);
}
//setTimeout(displayOnConsole ,5000)
//console.log("Tarea sincrona");

//-------------------------------------------------------------

//let intervalID = setInterval(displayOnConsole,1000) //despues de 1 segundo
//let intervalID = setInterval(displayOnConsole,1000*60*5) //despues de 5min
//console.log("intervalID: ", intervalID)
//setTimeout(()=>stopProcess(intervalID),5000)

//-------------------------------------------------------------

fetch("data/robots.txt")
  .then((response) => {
    console.log("Informacion recuperada correctamente");
    return response.text(); //return priomise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise ended");
  });

//console.log("*******************************************")

fetch("data/robots.txt")
  .then((response) => response.text()) // return Promise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise ended"));

//console.log("*******************************************");
let saludo = "No data";

fetch("data/robots.txt")
  .then((response) => response.text()) // return Promise
  .then((data) => {
    console.log("inside promise:", data);
    saludo = data;
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise ended"));

setTimeout(() => {
  console.log("outside promise", saludo);
}, 3000);

//console.log("*******************************************")
//----------------------------------------------------------------

// Implementacion con promesas

const doTask = (iterations) =>
  new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.round(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6",
          value: numbers,
        });
      }
    }
    resolve({
      error: false,
      message: "todo ok",
      value: numbers,
    });
  });
doTask(5)
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

//----------------------------------------------------------------------
/*
// Simulando un caso real
async function getData() {
    fetch("data/users.json")
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            return data
        })
        .catch((error) => console.warn(error));
}
*/

//MAIN

// const data = await getData();
// console.log(data)

// const list = document.getElementById("list_users");
// data.forEach((user) => {
//     console.log(user);
//     const p = document.createElement("p");
//     p.textContent = user.email;
//     list.appendChild(p);
// });

//----------------------------------------------------------------------------

//Main estructurado -> sincrono

/*
fetch("data/users.json")
  .then((response) => {
    console.log(response);
    console.log("Validamos la respuesta de peticion");
    if (!response.ok) {
      throw Error(response.statusText);
    }
    data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    const lista = document.querySelector("#list_users");

    data.forEach((element) => {
      const p = document.createElement("p");
      p.textContent = `${element.first_name} ${element.last_name} : ${element.email}`;
      lista.appendChild(p);
    });

    // Mostrar en un UL utilizando DOM
  })
  .catch((err) => console.warn(err))
  .finally(() => console.log("La promesa ha finalizado"));

*/

//----------------------------------------------------------------------------------------------
