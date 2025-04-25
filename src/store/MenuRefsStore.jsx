import { create } from 'zustand';

export const useMenuRefsStore = create((set) => ({
  whatIsItRef: null,
  panelistsRef: null,
  whyComeRef: null,
  aboutAlertaRef: null,
  setRefs: (refs) => set(() => ({ ...refs })),
}));