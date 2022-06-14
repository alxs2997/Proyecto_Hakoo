import sequelizeConexion from '../../database/config.js';
import Cliente from '../../models/cliente.js';
import Producto from '../../models/producto.js';
import Proveedor from '../../models/proveedor.js';
import talla from '../../models/talla.js';
import departamento from '../../models/departamento.js';
import marca from '../../models/marca.js';
import detalleOrden from '../../models/detalleOrden.js';
import orden from '../../models/orden.js';
import usuario from '../../models/usuario.js';


sequelizeConexion.sync({force:true})