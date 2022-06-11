import servicioCliente from '../services/clientService.js';
//controlador de clientes

async function index(req,res){
    const clientes = await servicioCliente.mostrarTodos();
    res.status(200).send(clientes);
}

async function update(req,res){
    const cliente = await servicioCliente.actualizar(req.params.id, req.body);
    res.send(cliente);
}

async function create(req,res){
    const cliente = await servicioCliente.crear(req.body);
    res.send(cliente);
}
async function destroy(req,res){
    const response = await servicioCliente.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const cliente = await servicioCliente.mostrar(req.params.id);
    res.send(cliente);
}

export default {index, create, update, destroy, show}

