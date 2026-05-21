import prisma from '../lib/prisma';
import { createDocumentData, updateDocumentData } from '../types/type';

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
      ...(tone && {
        tone,
      }),
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

export const updateDocument = async (
  documentId: string,
  userId: string,
  data: updateDocumentData
) => {
  //check ownership first
  const existing = await prisma.document.findFirst({
    where: {
      id: documentId,
      userId,
    },
  });

  if (!existing) {
    throw new Error('Document not found');
  }

  const update = await prisma.document.update({
    where: {
      id: documentId,
    },
    data,
  });
  return update;
};

export const deleteDocument = async (documentId: string, userId: string) => {
  //verify ownership
  const existing = await prisma.document.findFirst({
    where: {
      id: documentId,
      userId,
    },
  });

  if (!existing) {
    throw new Error('Document not found');
  }

  await prisma.document.delete({
    where: {
      id: documentId,
    },
  });
  return {
    success: true,
  };
};
