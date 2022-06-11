import Talla from '../models/talla.js';

async function crear (data){
    return await Talla.create(data);
}

async function mostrar (id){
    return await Talla.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await Talla.findAll();
}
async function eliminar (id){
    return await Talla.destroy({ where: { id_talla : id } });
}

async function actualizar (id, data){
    return await Talla.update(data,{ where: { id_talla : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }