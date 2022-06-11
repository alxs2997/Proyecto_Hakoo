import Proveedor from '../models/proveedor.js';

async function crear (data){
    return await Proveedor.create(data);
}

async function mostrar (id){
    return await Proveedor.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await Proveedor.findAll();
}
async function eliminar (id){
    return await Proveedor.destroy({ where: { id_proveedor : id } });
}

async function actualizar (id, data){
    return await Proveedor.update(data,{ where: { id_proveedor : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }