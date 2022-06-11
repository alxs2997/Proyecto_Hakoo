import servicioDepartamento from '../services/departmentService.js';


async function index(req,res){
    const user = await servicioDepartamento.mostrarTodos();
    res.status(200).send(user);
}

async function update(req,res){
    const departamento = await servicioDepartamento.actualizar(req.params.id, req.body);
    res.send(departamento);
}

async function create(req,res){
    const departamento = await servicioDepartamento.crear(req.body);
    res.send(departamento);
}
async function destroy(req,res){
    const response = await servicioDepartamento.eliminar(req.params.id);
    if(response >=1){
        res.status(200).send('Se eliminó');
    }else{
        res.status(404).send('No hay nada para eliminar')
    } 
}

async function show(req,res){
    const departamento = await servicioDepartamento.mostrar(req.params.id);
    res.send(departamento);
}

export default {index, create, update, destroy, show}