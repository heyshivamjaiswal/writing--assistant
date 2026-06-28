import api from './api';

export const editDocument = async (id: string, content: string) => {
  const response = await api.put(`/documents/${id}`, {
    content,
  });

  return response.data;
};
