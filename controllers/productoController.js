import servicioProducto from '../services/productService.js';

//controlador de producto

async function index(req,res){
    const producto = await servicioProducto.mostrarTodos();
    res.status(200).send(producto);
}

async function update(req,res){
    const producto = await servicioProducto.actualizar(req.params.id, req.body);
    res.send(producto);
}

async function create(req,res){
    const producto = await servicioProducto.crear(req.body);
    res.send(producto);
}
async function destroy(req,res){
    const response = await servicioProducto.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const producto = await servicioProducto.mostrar(req.params.id);
    res.send(producto);
}

export default {index, create, update, destroy, show}