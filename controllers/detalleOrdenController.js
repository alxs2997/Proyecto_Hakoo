import servicioOrdenDetalle from '../services/orderDetailService.js';


async function index(req,res){
    const orden = await servicioOrdenDetalle.mostrarTodos();
    res.status(200).send(orden);
}

async function update(req,res){
    const orden = await servicioOrdenDetalle.actualizar(req.params.id, req.body);
    res.send(orden);
}

async function create(req,res){
    const orden = await servicioOrdenDetalle.crear(req.body);
    res.send(orden);
}
async function destroy(req,res){
    const response = await servicioOrdenDetalle.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const orden = await servicioOrdenDetalle.mostrar(req.params.id);
    res.send(orden);
}

export default {index, create, update, destroy, show}