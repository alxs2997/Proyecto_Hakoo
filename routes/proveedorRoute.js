import { Router } from 'express';
import proveedorController from '../controllers/proveedorController.js';
const router = Router();

/* GET home page. */
router.get('/',proveedorController.index)
        .post('/add',proveedorController.create)
        .put('/update/:id',proveedorController.update)
        .delete('/delete/:id',proveedorController.destroy)
        .get('/show/:id',proveedorController.show);
export default router;