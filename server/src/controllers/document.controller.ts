import { Request, Response } from 'express';

export const createDocument = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      message: 'Document route working',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const getDocument = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: 'Get document route working',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};
