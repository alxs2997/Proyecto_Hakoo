import { Router } from 'express';
import loginController from '../controllers/loginController.js';
//import verificarUsuario from '../utils/verificar.js'

const router = Router();

//router.use(verificarUsuario)

/* GET home page. */
router.post('/login',loginController.login)
        .get('/logout', loginController.logout)

export default router;