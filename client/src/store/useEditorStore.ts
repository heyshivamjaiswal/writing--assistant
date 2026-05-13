import { create } from 'zustand';
import type { ContentType } from '../data/formField';

type EditorStore = {
  selected: ContentType | null;

  formValue: Record<string, string>;

  output: string;

  isLoading: boolean;

  setSelected: (type: ContentType | null) => void;

  setOutput: (output: string) => void;

  setFormValue: (name: string, value: string) => void;

  setLoading: (loading: boolean) => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  selected: null,

  formValue: {},

  output: '',

  isLoading: false,

  setSelected: (type) =>
    set({
      selected: type,
    }),

  setFormValue: (name: string, value: string) =>
    set((state) => ({
      formValue: {
        ...state.formValue,
        [name]: value,
      },
    })),

  setOutput: (output) =>
    set({
      output,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),
}));
