import clienteRouter from './clienteRoute.js';
import homeRoute from './homeRoute.js';
export function crearRutas(app){
    app.use('/', homeRoute);
    app.use('/api/cliente', clienteRouter);
}

