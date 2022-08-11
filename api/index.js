import { sequelize } from "./src/database/database.js";
import { server } from "./src/app.js";
import "./src/models/Pokemon.js";

async function runServer() {
  try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    server.listen(server.get("port"));
    console.log(`Server On Port: ${server.get("port")}`);
  } catch (error) {
    console.error(error.message);
  }
}

runServer();
