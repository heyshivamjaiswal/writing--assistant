import { create } from 'zustand';

export type Document = {
  id: string;

  title: string;

  content: string;

  type: string;

  tone?: string;

  createdAt: string;
};

type DocumentStore = {
  documents: Document[];

  selectedDocument: Document | null;

  setDocuments: (docs: Document[]) => void;

  selectDocument: (doc: Document) => void;

  addDocument: (doc: Document) => void;

  updateDocument: (doc: Document) => void;

  removeDocument: (id: string) => void;
};

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],

  selectedDocument: null,

  setDocuments: (docs) =>
    set({
      documents: docs,
    }),

  selectDocument: (doc) =>
    set({
      selectedDocument: doc,
    }),

  addDocument: (doc) =>
    set((state) => ({
      documents: [doc, ...state.documents],
    })),

  updateDocument: (updated) =>
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === updated.id ? updated : doc
      ),

      selectedDocument:
        state.selectedDocument?.id === updated.id
          ? updated
          : state.selectedDocument,
    })),

  removeDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),

      selectedDocument:
        state.selectedDocument?.id === id ? null : state.selectedDocument,
    })),
}));
