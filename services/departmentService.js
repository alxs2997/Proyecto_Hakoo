import Departamento from '../models/departamento.js';

async function crear (data){
    return await Departamento.create(data);
}

async function mostrar (id){
    return await Departamento.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){ 
    return await Departamento.findAll();
}
async function eliminar (id){
    return await Departamento.destroy({ where: { id_departamento : id } });
}

async function actualizar (id, data){
    return await Departamento.update(data,{ where: { id_departamento : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }