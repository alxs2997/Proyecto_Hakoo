//controlador de clientes
const registro = Cliente.build({
    Nombres: "María Magnolia", Apellidos: "Santos Benitez",
    Nombre_Usuario: "JBP7", Correo: "correo@mail.com", Telefono: "23456789",
    Password: "1234567"
});

await registro.save()