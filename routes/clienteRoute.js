import { Router } from 'express';
import clienteController from '../controllers/cliente.js';
const router = Router();

/* GET home page. */
router.get('/',clienteController.index);

export default router;
