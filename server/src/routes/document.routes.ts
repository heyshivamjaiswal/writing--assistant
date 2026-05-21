import { Router } from 'express';
import {
  createDocument,
  getDocument,
  documentById,
  editDocument,
  removeDocument,
} from '../controllers/document.controller';

import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/', protect, createDocument);

router.get('/', protect, getDocument);

router.get('/:id', protect, documentById);

router.put('/:id', protect, editDocument);

router.delete('/:id', protect, removeDocument);

export default router;
