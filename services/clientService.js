import Cliente from '../models/cliente.js';

function crear (data){

}

function mostrar (id){
    
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    const client = await Cliente.findAll(); 
    return client
}

function eliminar (id){
    
}

function actualizar (id, data){
    
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }