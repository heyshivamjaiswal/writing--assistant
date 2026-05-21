import { Request, Response } from 'express';

export const generateContent = async (req: Request, res: Response) => {
  try {
    const prompt = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: 'Prompt required',
      });
    }
    return res.status(200).json({
      output: `Generated: 
        ${prompt}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Generation Failed',
    });
  }
};
