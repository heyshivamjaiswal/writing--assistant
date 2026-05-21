import axios from 'axios';

export const editDocument = async (id: string, content: string) => {
  const token = localStorage.getItem('token');

  const response = await axios.put(
    `http://localhost:5000/documents/${id}`,
    {
      content,
    },

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
