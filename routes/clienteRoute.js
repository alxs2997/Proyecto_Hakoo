import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
const router = Router();

/* GET home page. */
router.get('/',clienteController.index)
        .post('/add',clienteController.create)
        .put('/update/:id',clienteController.update)
        .delete('/delete/:id', clienteController.destroy)
        .get('/show/:id',clienteController.show);
export default router;
