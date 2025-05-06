import { create } from 'zustand';

export const useImageFileStore = create((set) => ({
    file: null,
    setFile: (file) => set({ file }),
}));

export default useImageFileStore;