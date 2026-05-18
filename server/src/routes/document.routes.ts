import { Router } from 'express';
import {
  createDocument,
  getDocument,
} from '../controllers/document.controller';

import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/', protect, createDocument);
router.get('/', protect, getDocument);

export default router;
