import servicioCliente from '../services/clientService.js';
//controlador de clientes

function index(req,res){
    const clientes = servicioCliente.mostrarTodos();
    res.send(clientes);
}

/*const registro = Cliente.build({
    Nombres: "María Magnolia", Apellidos: "Santos Benitez",
    Nombre_Usuario: "JBP7", Correo: "correo@mail.com", Telefono: "23456789",
    Password: "1234567"
});*/

export default {index}
//await registro.save()