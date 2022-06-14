import Orden from '../models/orden.js';
import DetalleOrden from '../models/detalleOrden.js'

async function crear (data){
    /*{
        id_orden, 
        id_cliente,
        facturada: false,
        fecha_facturacion: null,
        fecha: new Date()
    }*/

    /*{
        id_orden,
        id_producto,
        reglon,
        cantidad,
        precio,
        costo
    }*/

    const orden = await Orden.create({
        id_cliente: data.id_cliente,
        facturada:false,
        fecha_facturacion:null,
        fecha: new Date()
    });

    const id_orden = orden.id_orden

    const justProducts = data.productos.map((pro)=>{
        return {id_orden:id_orden, ...pro}
    })

    const detalleOrden = await DetalleOrden.bulkCreate(justProducts);

    const orderJson =  JSON.stringify(orden)
    const detalleOrdenJson =  JSON.stringify(detalleOrden)

    return [orderJson, detalleOrden]

    
    //usar build
    
}

async function mostrar (id){

    const orden = await Orden.findByPk(id);
    const detalleOrden = await DetalleOrden.findAll({where: {id_orden: id}})

    let ordenJSON = JSON.parse(JSON.stringify(orden))
    let detalleJSON = JSON.parse(JSON.stringify(detalleOrden))

    ordenJSON.detalle = detalleJSON
    return ordenJSON
}

//Retornará todos los datos de la tabla clientes
async function mostrarTodos (){
    return await Orden.findAll();
}
async function eliminar (id){
    
    const ordenDel = await Orden.destroy({ where: { id_orden : id } });
    const detalleDel = await DetalleOrden.destroy({where: {id_orden: id}})

    return (ordenDel == 1 && detalleDel == 1) ? 1 : 0
}

async function actualizar (id, data){
    return await Orden.update(data,{ where: { id_orden : id}})
}

export default { 
    crear,
    mostrar,
    mostrarTodos,
    eliminar,
    actualizar
 }