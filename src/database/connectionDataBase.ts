import {Dialect, Sequelize} from "sequelize";
import Dotenv from "dotenv";

//Extrae desde .env la variable HTTP PORT
Dotenv.config(); //

const dbName = process.env.POSTGRES_DB as string
const dbUser = process.env.POSTGRES_USER as string
const dbHost = process.env.POSTGRES_HOST
const dbPassword = process.env.POSTGRES_PASSWORD
const dbDriver = process.env.DB_DRIVER as Dialect

export const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
  {
    host: dbHost,
    dialect: dbDriver, //elegir la base de datos que se va usar 
  }
);