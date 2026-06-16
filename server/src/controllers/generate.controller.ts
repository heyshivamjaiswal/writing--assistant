import { Request, Response } from 'express';

import { generateText } from '../services/generate.service';

export const generateContent = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: 'Prompt required',
      });
    }

    const output = await generateText(prompt);

    return res.status(200).json({
      output,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: 'Generation Failed',
    });
  }
};
