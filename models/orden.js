import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Orden = sequelizeConexion.define('ordenes', {
    // Model attributes are defined here
    id_orden: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_cliente: { type: DataTypes.INTEGER },
    facturada: { type: DataTypes.BOOLEAN, allowNull: false },
    fecha_facturacion: { type: DataTypes.DATE, allowNull: false},
    fecha: { type: DataTypes.DATE, allowNull: false},
}, { freezeTableName: true });

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Orden.sync();

export default Orden