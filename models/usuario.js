import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Usuario = sequelizeConexion.define('usuario', {
    // Model attributes are defined here
    id_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
});

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Usuario.sync();

export default Usuario