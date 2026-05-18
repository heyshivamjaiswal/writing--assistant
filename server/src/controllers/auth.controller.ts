import { Request, Response } from 'express';
import { createUser, loginUser } from '../services/auth.service';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    // Basic validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const result = await createUser({
      fullName,
      email,
      password,
    });

    return res.status(201).json({
      message: 'User created successfully',
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Internal server error',
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    const result = await loginUser({ email, password });

    return res.status(200).json({
      message: 'Login Successful',
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Internal server error',
    });
  }
};
