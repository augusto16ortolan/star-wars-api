const axios = require("axios");

async function obterPersonagem(nomeDoPersonagem) {
  try {
    let response = await axios.get(
      `https://swapi.dev/api/people?search=${nomeDoPersonagem}`
    );
    let darthVader = response.data.results[0];
    let uriDaNave = darthVader.starships[0];

    console.log("Dados do personagem: ", darthVader);

    console.log("=======================================");

    buscarNave(uriDaNave);
  } catch (error) {
    console.log("Algo deu errado!", error);
  }
}

async function buscarNave(uriDaNave) {
  let response = await axios.get(uriDaNave);
  let nave = response.data;
  const { name, films } = nave;
  let uriDoFilme = films[0];

  console.log("Nave do personagem: ", name);

  console.log("=======================================");

  buscarFilme(uriDoFilme);
}

async function buscarFilme(uriDoFilme) {
  let response = await axios.get(uriDoFilme);
  let filme = response.data;
  let { title, opening_crawl } = filme;

  console.log("Filme em que a nave aparece: ", title);

  console.log("=======================================");
  console.log("Texto de abertura: ", opening_crawl);

  console.log("=======================================");
}

obterPersonagem("Darth Vader");
