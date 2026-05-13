import { create } from 'zustand';
import type { ContentType } from '../data/formField';

type EditorStore = {
  selected: ContentType | null;

  formValue: Record<string, string>;

  output: string;

  setSelected: (type: ContentType | null) => void;

  setOutput: (output: string) => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  selected: null,

  formValue: {},

  output: '',

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
}));
