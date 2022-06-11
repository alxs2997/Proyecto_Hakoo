import Producto from '../models/producto.js';

async function crear (data){
    return await Producto.create(data);
}

async function mostrar (id){
    return await Producto.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){ 
    return await Producto.findAll();
}
async function eliminar (id){
    return await Producto.destroy({ where: { id_producto : id } });
}

async function actualizar (id, data){
    return await Producto.update(data,{ where: { id_producto : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }