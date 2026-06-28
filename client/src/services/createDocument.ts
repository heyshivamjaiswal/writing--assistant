import api from './api';

type CreateDocumentInput = {
  title: string;
  content: string;
  type: string;
};

export const createDocument = async (data: CreateDocumentInput) => {
  const res = await api.post('/documents', data);

  return res.data.document;
};
