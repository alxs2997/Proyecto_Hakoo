import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Talla = sequelizeConexion.define('talla', {
    // Model attributes are defined here
    id_talla: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
});

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Talla.sync();

export default Talla