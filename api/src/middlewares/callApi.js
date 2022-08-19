import axios from "axios";
const URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokesApi() {
  try {
    const apiRequest = await axios.get(`${URL}?limit=100&offset=251`);
    const pokesApi = apiRequest.data.results;
    let endpoints = [];
    for (let i = 0; i < pokesApi.length; i++) {
      endpoints.push(pokesApi[i].url);
    }
    const response = await axios
      .all(endpoints.map((endpoint) => PokeApiGetInfo(endpoint)))
      .then((res) => {
        return res;
      });
    return response;
  } catch (error) {
    return error;
  }
}

export async function PokeApiGetInfo(url) {
  const requestStats = await axios.get(url);
  const { id, name, height, weight, types, stats } = requestStats.data;
  let pokestats = getStats(stats);
  let pokeTypes = getTypes(types);
  const pokemonFilter = {
    id: id,
    name: name,
    typeOne: pokeTypes[0],
    typeTwo: pokeTypes[1],
    hp: pokestats[0],
    attack: pokestats[1],
    defense: pokestats[2],
    speed: pokestats[3],
    height: height,
    weight: weight,
    imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  };
  return pokemonFilter;
}

function getTypes(types) {
  let filterAllTypes = [null, null];
  filterAllTypes = types.map((t) => t.type.name);
  return filterAllTypes;
}

function getStats(stats) {
  const statsDB = ["hp", "attack", "defense", "speed"];
  let filterAllStats = stats.filter((statItem) => {
    if (statsDB.includes(statItem.stat.name)) return statItem;
  });
  filterAllStats = filterAllStats.map((stat) => stat.base_stat);
  return filterAllStats;
}
