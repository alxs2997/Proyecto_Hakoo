import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

//router.use(verificarUsuario)

/* GET home page. */
router.get('/', [verificarUsuario] ,clienteController.index)
        .post('/add',clienteController.create)
        .put('/update/:id', [verificarUsuario] ,clienteController.update)
        .delete('/delete/:id', [verificarUsuario], clienteController.destroy)
        .get('/show/:id', [verificarUsuario] ,clienteController.show);

export default router;