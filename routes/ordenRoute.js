import { Router } from 'express';
import ordenController from '../controllers/ordenController.js';
import verificarUsuario from '../utils/verificar.js'

const router = Router();

router.use(verificarUsuario)

/* GET home page. */
router.get('/',ordenController.index)
        .post('/add',ordenController.create)
        .put('/update/:id',ordenController.update)
        .delete('/delete/:id',ordenController.destroy)
        .get('/show/:id',ordenController.show);
export default router;