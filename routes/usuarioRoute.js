import { Router } from 'express';
import usuarioController from '../controllers/usuarioController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',usuarioController.index)
        .post('/add',usuarioController.create)
        .put('/update/:id',usuarioController.update)
        .delete('/delete/:id', usuarioController.destroy)
        .get('/show/:id', usuarioController.show);
        
export default router;
