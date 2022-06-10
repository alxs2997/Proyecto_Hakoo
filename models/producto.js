import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Producto = sequelizeConexion.define('producto', {
    // Model attributes are defined here
    id_producto: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_marca: { type: DataTypes.INTEGER },
    id_talla: { type: DataTypes.INTEGER },
    id_departamento: { type: DataTypes.INTEGER },
    id_proveedor: { type: DataTypes.INTEGER },
    descripcion: { type: DataTypes.STRING },
    imagen: { type: DataTypes.BLOB('medium') },
    precio: { type: DataTypes.DECIMAL(10, 4) },
    costo: { type: DataTypes.DECIMAL(10, 4) },
    cantidad: { type: DataTypes.INTEGER },
});

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Producto.sync();

export default Producto