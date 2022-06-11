import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Proveedor = sequelizeConexion.define('proveedores', {
    // Model attributes are defined here
    id_proveedor: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.INTEGER },
    direccion: { type: DataTypes.STRING },

},{ freezeTableName: true });

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Proveedor.sync();

export default Proveedor