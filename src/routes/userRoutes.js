import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);
// até este ponto

router.post('/', userController.store);
router.put('/', loginRequired, userController.update); // O id será capturado do token (jwt)
router.delete('/', loginRequired, userController.delete); // O id será capturado do token (jwt)

export default router;
