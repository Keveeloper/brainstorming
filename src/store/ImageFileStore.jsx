import { create } from 'zustand';

export const useImageFileStore = create((set) => ({
    file: null,
    imageRef: null,
    setFile: (file) => set({ file }),
    setRefs: (refs) => set(() => ({ ...refs })),
}));

export default useImageFileStore;