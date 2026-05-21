import { Router } from 'express';

import { protect } from '../middleware/auth.middleware';

import { generateContent } from '../controllers/generate.controller';

const router = Router();

router.post('/', protect, generateContent);

export default router;
