import app from "./app";
import Dotenv from "dotenv";
//import { sequelize } from "./database/connectionDataBase";
import dbInit from "./database/init";

Dotenv.config(); //
const { HTTP_PORT } = process.env;

dbInit()

async function main() {
    try {
        app.listen(HTTP_PORT);
        console.log(`server is listening on port ${HTTP_PORT}`);
    } catch (error) {
        console.log(error);
    }
}

main();