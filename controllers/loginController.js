import servicioCliente from '../services/clientService.js';
import utils from '../utils/autenticar.js'

async function login(req, res){
    const {correo, password} = req.body
    const hashedPassword = utils.getHashedPassword(password)
    const cliente = await servicioCliente.buscarPor({where: {correo:correo, password: hashedPassword}})
    
    if(cliente.length !== 0){
        const authToken = utils.generateAuthToken();
        // almacenar el token de autenticación
        utils.authTokens[authToken] = cliente;
        // guardar el token en una cookie
        res.cookie('AuthToken', authToken); //settings token
        res.status(200).send("ok")
    }else{
        res.status(404).send("No existe cliente")
    }   
}

function logout(req, res){
    res.clearCookie('AuthToken');
    res.status(200).send("ok")
}

export default {
    login,
    logout
}