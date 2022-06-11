import servicioProveedor from '../services/supplierService.js';


async function index(req,res){
    const talla = await servicioProveedor.mostrarTodos();
    res.status(200).send(talla);
}

async function update(req,res){
    const proveedor = await servicioProveedor.actualizar(req.params.id, req.body);
    res.send(proveedor);
}

async function create(req,res){
    const proveedor = await servicioProveedor.crear(req.body);
    res.send(proveedor);
}
async function destroy(req,res){
    const response = await servicioProveedor.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const proveedor = await servicioProveedor.mostrar(req.params.id);
    res.send(proveedor);
}

export default {index, create, update, destroy, show}