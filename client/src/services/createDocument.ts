import axios from 'axios';

type CreateDocumentInput = {
  title: string;
  content: string;
  type: string;
};

export const createDocument = async (data: CreateDocumentInput) => {
  const token = localStorage.getItem('token');

  const res = await axios.post(
    'http://localhost:5000/documents',

    data,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log('CREATE RESPONSE', res.data);

  return res.data.document;
};
