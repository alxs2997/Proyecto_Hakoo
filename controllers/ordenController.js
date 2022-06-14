import servicioOrden from '../services/orderService.js';


async function index(req,res){
    const orden = await servicioOrden.mostrarTodos();
    res.status(200).send(orden);
}

async function update(req,res){
    const orden = await servicioOrden.actualizar(req.params.id, req.body);
    res.send(orden);
}

async function create(req,res){
    const orden = await servicioOrden.crear(req.body);
    res.send(orden);
}

async function destroy(req,res){
    const response = await servicioOrden.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const orden = await servicioOrden.mostrar(req.params.id);
    res.send(orden);
}

export default {index, create, update, destroy, show}