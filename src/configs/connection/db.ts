import path from "path";
import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";

const modelsPath = path.join(__dirname, "../../models");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configSqlite = {
    database: String(process.env.DB_NAME),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    dialect: <Dialect>"sqlite",
    storage: "makan-express.sqlite",
    models: [modelsPath],
};

const sqliteDb = new Sequelize(configSqlite);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configMssql = {
    host: String(process.env.DB_HOST),
    dialect: <Dialect>"mssql",
    port: 1433,
    pool: {
        max: 5,
        min: 0,
        acquire: 5000,
    },
    retry: {
        max: 20,
    },
    models: [modelsPath],
};

/**
 * NOTE: Uncomment the following lines to use mssql.
 */

/*const mssqlDb = new Sequelize(
    String(process.env.DB_USER),
    String(process.env.DB_NAME),
    String(process.env.DB_PASSWORD),
    configMssql,
);

(async () => {
    try {
        await mssqlDb.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();*/

export {
    sqliteDb,
    // mssqlDb,
};
export default sqliteDb;
