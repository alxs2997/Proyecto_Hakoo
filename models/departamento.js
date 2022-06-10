import sequelizeConexion from '../database/config.js'
import { DataTypes } from 'sequelize'

const Departamento = sequelizeConexion.define('departamento', {
    // Model attributes are defined here
    id_departamento: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
});

//Lo que hace sync (sincroniza los campos creados aca con la tabla de la BD)
await Departamento.sync();

export default Departamento