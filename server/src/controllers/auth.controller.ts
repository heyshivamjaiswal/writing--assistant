import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    res.status(201).json({
      message: 'Signup route working',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: 'Singin route working',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
