import clienteRouter from './clienteRoute.js';
import homeRoute from './homeRoute.js';
import usuarioRouter from './usuarioRoute.js';
import productoRouter from './productoRoute.js';
import proveedorRouter from './proveedorRoute.js';
import departamentoRouter from './departamentoRoute.js';
import tallaRouter from './tallaRoute.js';
import ordenRouter from './ordenRoute.js';
import detalleOrdenRouter from './detalleOrdenRoute.js';
import marcaRouter from './marcaRoute.js';
import loginRouter from './loginRoute.js'


export function crearRutas(app){
    app.use('/', homeRoute);
    app.use('/', loginRouter);
    app.use('/api/cliente', clienteRouter);
    app.use('/api/usuario', usuarioRouter);
    app.use('/api/producto', productoRouter);
    app.use('/api/proveedores', proveedorRouter);
    app.use('/api/departamento',departamentoRouter);
    app.use('/api/talla', tallaRouter);
    app.use('/api/marca', marcaRouter);
    app.use('/api/orden', ordenRouter);
    app.use('/api/detalleOrden', detalleOrdenRouter);
}

