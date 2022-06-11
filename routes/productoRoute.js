import { Router } from 'express';
import productoController from '../controllers/productoController.js';
const router = Router();

/* GET home page. */
router.get('/',productoController.index)
        .post('/add', productoController.create)
        .put('/update/:id', productoController.update)
        .delete('/delete/:id', productoController.destroy)
        .get('/show/:id', productoController.show);
export default router;