import servicioMarca from '../services/brandService.js';


async function index(req,res){
    const marca = await servicioMarca.mostrarTodos();
    res.status(200).send(marca);
}

async function update(req,res){
    const marca = await servicioMarca.actualizar(req.params.id, req.body);
    res.send(marca);
}

async function create(req,res){
    const marca = await servicioMarca.crear(req.body);
    res.send(marca);
}
async function destroy(req,res){
    const response = await servicioMarca.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const marca = await servicioMarca.mostrar(req.params.id);
    res.send(marca);
}

export default {index, create, update, destroy, show}