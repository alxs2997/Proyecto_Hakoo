import { Router } from 'express';
import productoController from '../controllers/productoController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',productoController.index)
        .post('/add', productoController.create)
        .put('/update/:id', productoController.update)
        .delete('/delete/:id', productoController.destroy)
        .get('/show/:id', productoController.show);
        
export default router;