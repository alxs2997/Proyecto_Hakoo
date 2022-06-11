import OrdenD from '../models/detalleOrden.js';

async function crear (data){
    return await OrdenD.create(data);
}

async function mostrar (id){
    return await OrdenD.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await OrdenD.findAll();
}
async function eliminar (id){
    return await OrdenD.destroy({ where: { id_orden : id } });
}

async function actualizar (id, data){
    return await OrdenD.update(data,{ where: { id_orden : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }