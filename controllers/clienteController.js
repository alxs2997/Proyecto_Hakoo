import servicioCliente from '../services/clientService.js';
//controlador de clientes

async function index(req,res){
    const clientes = await servicioCliente.mostrarTodos();
    res.send(clientes);
}

async function update(req,res){
    //const cliente = await servicioCliente.actualizar(req.params.id, req.body);
    console.log(req.params.id, req.body);
    res.send('cliente');
}

async function create(req,res){
    const cliente = await servicioCliente.crear(req.body);
    //console.log(req.body);
    res.send(cliente);
}
async function destroy(req,res){
    const cliente = await servicioCliente.eliminar(req.params.id);
    res.send(cliente);
}
async function show(req,res){
    const cliente = await servicioCliente.mostrar(req.params.id);
    res.send(cliente);
}

export default {index, create, update, destroy,show}

