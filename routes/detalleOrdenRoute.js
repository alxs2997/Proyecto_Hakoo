import { Router } from 'express';
import ordenDetalleController   from '../controllers/detalleOrdenController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.post('/add',ordenDetalleController.create)
        .put('/update/:id',ordenDetalleController.update)
        .delete('/delete/:id',ordenDetalleController.destroy)
        
export default router;