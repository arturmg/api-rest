// Este módulo define a rota para fazer o upload (store) dos arquivos
// de imagem.

import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
