import api from './api';

export const deleteDocument = async (id: string) => {
  const response = await api.delete(`/documents/${id}`);

  return response.data;
};
