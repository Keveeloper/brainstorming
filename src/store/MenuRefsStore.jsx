import { create } from 'zustand';

export const useMenuRefsStore = create((set) => ({
  whatIsItRef: null,
  panelistsRef: null,
  panelistsMobileRef: null,
  whyComeRef: null,
  bookingRef: null, 
  aboutAlertaRef: null,
  setRefs: (refs) => set(() => ({ ...refs })),
}));