import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';

const modelsPath = path.join(__dirname, '../../models');
const db = new Sequelize({
    database: String(process.env.DB_NAME),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    dialect: <Dialect>process.env.DB_DRIVER,
    storage: 'makan-express.sqlite',
    models: [modelsPath],
});

export default db;
