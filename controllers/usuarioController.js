import servicioUsuario from '../services/userService.js';
//controlador de usuario

async function index(req,res){
    const user = await servicioUsuario.mostrarTodos();
    res.status(200).send(user);
}

async function update(req,res){
    const usuario = await servicioUsuario.actualizar(req.params.id, req.body);
    res.send(usuario);
}

async function create(req,res){
    const usuario = await servicioUsuario.crear(req.body);
    res.send(usuario);
}
async function destroy(req,res){
    const response = await servicioUsuario.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const usuario = await servicioUsuario.mostrar(req.params.id);
    res.send(usuario);
}

export default {index, create, update, destroy, show}