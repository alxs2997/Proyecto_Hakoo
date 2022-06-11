import clienteRouter from './clienteRoute.js';
import homeRoute from './homeRoute.js';
import usuarioRouter from './usuarioRoute.js';
import productoController from './productoRoute.js';


export function crearRutas(app){
    app.use('/', homeRoute);
    app.use('/api/cliente', clienteRouter);
    app.use('/api/usuario', usuarioRouter);
    app.use('/api/producto', productoController);
}

