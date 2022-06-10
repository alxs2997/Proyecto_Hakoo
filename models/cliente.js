//modelo de tabla de bd hakoo tabla cliente
import sequelize from '../database/config.js'

//Esquema de la tabla
import { Sequelize, DataTypes } from 'sequelize';
//const sequelize = new Sequelize('sqlite::memory:');
const Cliente = sequelize.define('Cliente', {
    // Model attributes are defined here
    Nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    Nombre_Usuario: {
        type: DataTypes.STRING
    },
    Correo: {
        type: DataTypes.STRING
    },
    Telefono: {
        type: DataTypes.INTEGER
    },
    Password: {
        type: DataTypes.STRING
    },

}, {
    // Other model options go here
});


//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Cliente.sync();




export default Cliente