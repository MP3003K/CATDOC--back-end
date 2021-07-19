import { Router } from 'express'

const router = Router();

import * as emailCtr from '../controllers/email.controller';

router.post('/send-mail', emailCtr.email);

export default router;