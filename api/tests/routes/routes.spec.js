import request from "supertest";
import { server } from "../../src/app";
import { sequelize } from "../../src/database/database.js";

describe("GET /pokemons, ruta que devuelve un array con los pokemons de la DB y la API", () => {
  // beforeEach(() => {});
  // afterEach(() => {});

  test("Se espera una respuesa con codigo 200", async () => {
    const response = await request(server).get("/pokemons").send();
    expect(response.status).toBe(200);
  });
  test("La respuesta debe ser un array con los pokemons", async () => {
    const response = await request(server).get("/pokemons").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("GET /pokemon/:id, la ruta devuelve un objeto con los datos del pokemon pasado por params", () => {
  test("Si el ID del pokemon es correcto se espera una respuesta con codigo 200", async () => {
    const response = await request(server).get("/pokemons/1").send();
    expect(response.status).toBe(200);
  });

  test("Si el ID del pokemon es existente debe responder con un objeto con la info del Pokemon", async () => {
    const response = await request(server).get("/pokemons/1").send();
    expect(response.body).toHaveProperty("name", "bulbasaur");
    expect(response.body).toHaveProperty("typeOne", "grass");
    expect(response.body).toHaveProperty("typeTwo", "poison");
    expect(response.body).toHaveProperty("hp", 45);
  });

  test("Si el id no existe debe retornar un error con codigo 404", async () => {
    const response = await request(server).get("/pokemons/34564").send();
    expect(response.status).toBe(404);
  });
});

describe("GET /pokemon?name=entei, la ruta devuelve un objeto con los datos del pokemon pasado por query", () => {
  test("Se espera una respuesta con codigo 200 si la consulta es correcta", async () => {
    const response = await request(server).get("/pokemons?name=entei").send();
    expect(response.status).toBe(200);
  });

  test("La ruta devuelve un objeto con la informacion del pokemon, los datos se pasan por Query", async () => {
    const response = await request(server).get("/pokemons?name=entei").send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "entei");
  });

  test("La ruta devuelve un error 404 si el pokemon no se encuentra", async () => {
    const response = await request(server).get("/pokemons?name=martin").send();
    expect(response.status).toBe(404);
  });
});
