import { Router } from 'express'

const router = Router();
import * as detallectr from '../controllers/detalle.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/' ,checkToken, detallectr.readAllDetalle);
router.get("/:id" ,checkToken, detallectr.readDetalle);
router.delete("/delete/:id" ,checkToken, detallectr.delDetalle)
router.post("/add", checkToken, detallectr.createDetalle);
router.put("/update/:id" ,checkToken, detallectr.updateDetalle)

export default router;