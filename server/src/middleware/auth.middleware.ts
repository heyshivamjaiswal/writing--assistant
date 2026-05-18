import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  userId: string;
};

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1. Read authorization header
    const authHeader = req.headers.authorization;

    // 2. Check if token exists
    if (!authHeader) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    // 3. Extract token
    const token = authHeader.split(' ')[1];

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // 5. Attach user to request
    req.user = {
      userId: decoded.userId,
    };

    // 6. Continue request
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};
