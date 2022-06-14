import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Detalle = sequelizeConexion.define('detalle_orden', {
    // Model attributes are defined here
    id_orden: { type: DataTypes.INTEGER },
    id_producto: { type: DataTypes.INTEGER },
    reglon: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER},
    precio: { type: DataTypes.DECIMAL(10,4)},
    costo: { type: DataTypes.DECIMAL(10, 4)}
},{ freezeTableName: true });

await Detalle.sync();

export default Detalle;