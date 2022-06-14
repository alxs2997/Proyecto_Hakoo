import { Router } from 'express';
import departamentoController from '../controllers/departamentoController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',departamentoController.index)
        .post('/add',departamentoController.create)
        .put('/update/:id',departamentoController.update)
        .delete('/delete/:id',departamentoController.destroy)
        .get('/show/:id',departamentoController.show);
        
export default router;