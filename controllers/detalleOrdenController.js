import servicioOrdenDetalle from '../services/orderDetailService.js';


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

export default {create, update, destroy}