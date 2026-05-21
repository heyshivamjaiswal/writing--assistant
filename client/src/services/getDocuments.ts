import axios from 'axios';

export const getDocuments = async () => {
  const token = localStorage.getItem('token');

  const response = await axios.get(
    'http://localhost:5000/documents',

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
