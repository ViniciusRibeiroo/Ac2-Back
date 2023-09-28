import { Router } from 'express';
import UserController from './controllers/UserController';
import AviaoController from './controllers/AviaoController';
import HangarController from './controllers/HangarController';

export const router = Router();

router.get('/api/usuarios', UserController.listAll);
router.delete('/api/usuarios', UserController.deleteAll);
router.get('/api/user/:id', UserController.get);
router.post('/api/user', UserController.create);
router.delete('/api/user/:id', UserController.delete);
router.put('/api/user/:id', UserController.update);

router.get('/api/avioes', AviaoController.listAll);
router.delete('/api/avioes', AviaoController.deleteAll);
router.get('/api/aviao/:id', AviaoController.get);
router.post('/api/aviao', AviaoController.create);
router.delete('/api/aviao/:id', AviaoController.delete);
router.put('/api/aviao/:id', AviaoController.update);

router.get('/api/hangares', HangarController.listAll);
router.delete('/api/hangares', HangarController.deleteAll);
router.get('/api/hangar/:id', HangarController.get);
router.post('/api/hangar', HangarController.create);
router.delete('/api/hangar/:id', HangarController.delete);
router.put('/api/hangar/:id', HangarController.update);