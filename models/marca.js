import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Marca = sequelizeConexion.define('marca', {
    // Model attributes are defined here
    id_marca: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    logo: { type: DataTypes.BLOB('medium'), allowNull: false },

});

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Marca.sync();

export default Marca