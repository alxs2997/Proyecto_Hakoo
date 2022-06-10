import 'dotenv/config'
import { Sequelize } from 'sequelize';

const user = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const port = process.env.DB_PORT
const url = process.env.DB_URL
const database = process.env.DB_NAME

//Aquí se hará la conexión en sequelize
const sequelize = new Sequelize(database, user, password,{
    host: url,
    port: port,
    dialect: 'mariadb'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize