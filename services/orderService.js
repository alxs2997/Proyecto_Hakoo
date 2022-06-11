import Orden from '../models/orden.js';

async function crear (data){
    return await Orden.create(data);
}

async function mostrar (id){
    return await Orden.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await Orden.findAll();
}
async function eliminar (id){
    return await Orden.destroy({ where: { id_orden : id } });
}

async function actualizar (id, data){
    return await Orden.update(data,{ where: { id_orden : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }