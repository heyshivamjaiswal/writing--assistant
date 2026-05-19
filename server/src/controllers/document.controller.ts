import { Request, Response } from 'express';
import {
  createNewDocument,
  getSingleDocument,
  getUserDocuments,
  updateDocument,
  deleteDocument,
} from '../services/document.services';

export const createDocument = async (req: Request, res: Response) => {
  try {
    const { title, content, type, tone } = req.body;

    //validation
    if (!title || !content || !type) {
      return res.status(400).json({
        message: 'Missing requird fields',
      });
    }

    //user comes from middleware
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const document = await createNewDocument({
      title,
      content,
      type,
      tone,
      userId,
    });

    return res.status(201).json({
      message: 'Document created',
      document,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

export const getDocument = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    const documents = await getUserDocuments(userId);

    return res.status(200).json({
      documents,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

export const documentById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const document = await getSingleDocument(id, userId);

    return res.status(200).json({ document });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

export const editDocument = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const document = await updateDocument(id, userId, req.body);

    return res.status(200).json({
      message: 'Document updated',

      document,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};

export const removeDocument = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const userId = req.user?.userId;

    if (!userId) {
      return res.status(4001).json({
        message: 'Unauthorized',
      });
    }

    await deleteDocument(id, userId);

    return res.status(200).json({
      message: 'Document deleted',
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Something went wrong',
    });
  }
};
