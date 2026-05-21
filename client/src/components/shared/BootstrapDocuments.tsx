import { useEffect } from 'react';

import { getDocuments } from '../../services/getDocuments';

import { useDocumentStore } from '../../store/useDocumentStore';

export default function BootstrapDocuments() {
  const setDocuments = useDocumentStore((s) => s.setDocuments);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getDocuments();

        setDocuments(response.documents);
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  return null;
}
