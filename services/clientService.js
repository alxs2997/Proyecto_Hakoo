import Cliente from '../models/cliente.js';

async function buscarPorCorreo(correo){
    return await Cliente.findAll({where: {corre: correo}})
}

async function buscarPor(criterio){
    return await Cliente.findAll(criterio)
}

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
    actualizar,
    buscarPor
 }