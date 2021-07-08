import { Router } from 'express'

const router = Router();

import * as userCU2 from '../controllers/cu2.controller'
const { checkToken } = require('../auth/token_validation');

router.post('/add' ,checkToken, userCU2.crearUsuarioParticipante);
router.get('/list_part' , userCU2.listarDocentesParticipantes);
router.put('/upd_doc_part/:id' , userCU2.updateDocenteParticipante);
router.put('/elim_user/:id' , userCU2.eliminar_user_log);
export default router;

