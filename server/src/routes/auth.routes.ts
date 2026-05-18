import { Router } from 'express';

import { signIn, signUp } from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.get('/me', protect, (req, res) => {
  res.json({
    message: 'Protected route working',
    user: req.user,
  });
});

export default router;
