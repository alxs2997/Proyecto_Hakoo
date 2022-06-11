import { Router } from 'express';
import marcaController from '../controllers/marcaController.js';
const router = Router();

/* GET home page. */
router.get('/',marcaController.index)
        .post('/add',marcaController.create)
        .put('/update/:id',marcaController.update)
        .delete('/delete/:id',marcaController.destroy)
        .get('/show/:id',marcaController.show);
export default router;