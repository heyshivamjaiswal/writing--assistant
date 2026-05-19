import prisma from '../lib/prisma';
import { createDocumentData } from '../types/type';

export const createNewDocument = async ({
  title,
  content,
  type,
  tone,
  userId,
}: createDocumentData) => {
  const document = await prisma.document.create({
    data: {
      title,
      content,
      type,
      tone,
      userId,
    },
  });
  return document;
};

export const getUserDocuments = async (userId: string) => {
  const documents = await prisma.document.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return documents;
};

export const getSingleDocument = async (documentId: string, userId: string) => {
  const document = await prisma.document.findFirst({
    where: {
      id: documentId,
      userId,
    },
  });

  if (!document) {
    throw new Error('Document not found');
  }
  return document;
};
