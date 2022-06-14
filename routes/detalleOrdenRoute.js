import { Router } from 'express';
import ordenDetalleController   from '../controllers/detalleOrdenController.js';
const router = Router();

/* GET home page. */
router.post('/add',ordenDetalleController.create)
        .put('/update/:id',ordenDetalleController.update)
        .delete('/delete/:id',ordenDetalleController.destroy)
export default router;