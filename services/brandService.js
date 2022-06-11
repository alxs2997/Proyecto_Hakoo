import Marca from '../models/marca.js';

async function crear (data){
    return await Marca.create(data);
}

async function mostrar (id){
    return await Marca.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await Marca.findAll();
}
async function eliminar (id){
    return await Marca.destroy({ where: { id_marca : id } });
}

async function actualizar (id, data){
    return await Marca.update(data,{ where: { id_marca : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }