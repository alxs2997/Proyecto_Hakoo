import Cliente from '../models/cliente.js';

async function crear (data){
    return await Cliente.create(data);
}

async function mostrar (id){
    return await Cliente.findByPk(id);
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    //const client = await Cliente.findAll(); 
    return await Cliente.findAll();
    //console.log(client);
}
async function eliminar (id){
    return await Cliente.destroy({ where: { id_cliente : id } });
}

async function actualizar (id, data){
    return await Cliente.update(data,{ where: { id_cliente: id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }