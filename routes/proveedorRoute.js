import { Router } from 'express';
import proveedorController from '../controllers/proveedorController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',proveedorController.index)
        .post('/add',proveedorController.create)
        .put('/update/:id',proveedorController.update)
        .delete('/delete/:id',proveedorController.destroy)
        .get('/show/:id',proveedorController.show);
        
export default router;