import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pokemons = sequelize.define(
  "pokemons",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    typeOne: { type: DataTypes.STRING, defaultValue: null },
    typeTwo: { type: DataTypes.STRING, defaultValue: null },
    hp: { type: DataTypes.INTEGER },
    attack: { type: DataTypes.INTEGER },
    defense: { type: DataTypes.INTEGER },
    speed: { type: DataTypes.INTEGER },
    height: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.INTEGER },
    urlImg: { type: DataTypes.STRING },
    custom: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  },
  { timestamps: false }
);

export const Types = sequelize.define(
  "types",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Types.belongsToMany(Pokemons, { through: "pokemons_types" });
Pokemons.belongsToMany(Types, { through: "pokemons_types" });
