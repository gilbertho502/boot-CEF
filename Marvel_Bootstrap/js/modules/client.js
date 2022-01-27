const APIKEY = "d32c6bcd63e466cafed347920ea1ceb4"; // Public Key
const HASH = "e3d587be462649735e2f9733aa6418da"; // md5(ts+privateKey+publicKey) -> https://www.md5hashgenerator.com
const TS = "1";
const URL = "https://gateway.marvel.com/v1/public/";
const URL_LOCAL = "data/";


const CLIENT = {
  sendRequest: async (path) => {
    // 1. Hacer Peticion
    const response = await fetch(
      URL + path + "?ts=" + TS + "&apikey=" + APIKEY + "&hash=" + HASH
    );
    // Validar la respuesta
    if (!response.ok) throw Error(response.statusText);
    // Extraer la información
    const json = await response.json();
    return json.data.results;
  },
  sendRequestLocal: async (path) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path + ".json");
    // Validar la respuesta
    if (!response.ok) throw Error(response.statusText);
    // Extraer la información
    const json = await response.json();
    return json.data.results;
  },
};

export default CLIENT