import { Router } from 'express';
import ordenController from '../controllers/ordenController.js';
const router = Router();

/* GET home page. */
router.get('/',ordenController.index)
        .post('/add',ordenController.create)
        .put('/update/:id',ordenController.update)
        .delete('/delete/:id',ordenController.destroy)
        .get('/show/:id',ordenController.show);
export default router;