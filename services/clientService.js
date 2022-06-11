import Cliente from '../models/cliente.js';

function crear (data){

}

function mostrar (id){
    
}
//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    //const client = await Cliente.findAll(); 
    return await Cliente.findAll();
    //console.log(client);
}
//mostrarTodos();
/*(async () => {
    console.log(await mostrarTodos()); 
})*/
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