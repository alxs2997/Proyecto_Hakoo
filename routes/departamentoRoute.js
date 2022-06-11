import { Router } from 'express';
import departamentoController from '../controllers/departamentoController.js';
const router = Router();

/* GET home page. */
router.get('/',departamentoController.index)
        .post('/add',departamentoController.create)
        .put('/update/:id',departamentoController.update)
        .delete('/delete/:id',departamentoController.destroy)
        .get('/show/:id',departamentoController.show);
export default router;