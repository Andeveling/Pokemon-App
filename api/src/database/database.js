import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB, DB_HOST } = process.env;

export const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: 5432,
  dialect: "postgres",
  logging: false,
  native: false,
});
