import { Router } from 'express';
import tallaController from '../controllers/tallaController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',tallaController.index)
        .post('/add',tallaController.create)
        .put('/update/:id',tallaController.update)
        .delete('/delete/:id',tallaController.destroy)
        .get('/show/:id',tallaController.show);
        
export default router;