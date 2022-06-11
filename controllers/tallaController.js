import servicioTalla from '../services/sizeService.js';


async function index(req,res){
    const talla = await servicioTalla.mostrarTodos();
    res.status(200).send(talla);
}

async function update(req,res){
    const talla = await servicioTalla.actualizar(req.params.id, req.body);
    res.send(talla);
}

async function create(req,res){
    const talla = await servicioTalla.crear(req.body);
    res.send(talla);
}
async function destroy(req,res){
    const response = await servicioTalla.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const talla = await servicioTalla.mostrar(req.params.id);
    res.send(talla);
}

export default {index, create, update, destroy, show}