import Usuario from '../models/usuario.js';

async function crear (data){
    return await Usuario.create(data);
}

async function mostrar (id){
    return await Usuario.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    //const client = await Cliente.findAll(); 
    return await Usuario.findAll();
    //console.log(client);
}
async function eliminar (id){
    return await Usuario.destroy({ where: { id_usuario : id } });
}

async function actualizar (id, data){
    return await Usuario.update(data,{ where: { id_usuario : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }