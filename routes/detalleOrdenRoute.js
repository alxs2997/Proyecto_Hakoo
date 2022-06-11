import { Router } from 'express';
import ordenDetalleController   from '../controllers/detalleOrdenController.js';
const router = Router();

/* GET home page. */
router.get('/',ordenDetalleController.index)
        .post('/add',ordenDetalleController.create)
        .put('/update/:id',ordenDetalleController.update)
        .delete('/delete/:id',ordenDetalleController.destroy)
        .get('/show/:id',ordenDetalleController.show);
export default router;