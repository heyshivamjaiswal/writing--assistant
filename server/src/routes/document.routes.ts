import { Router } from 'express';
import {
  createDocument,
  getDocument,
  documentById,
} from '../controllers/document.controller';

import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/', protect, createDocument);
router.get('/', protect, getDocument);
router.get('/:id', protect, documentById);

export default router;
