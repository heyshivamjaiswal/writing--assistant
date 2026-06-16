import api from './api';

export const generateContent = async (prompt: string) => {
  const response = await api.post(`/generate`, { prompt });
  return response.data.output;
};
