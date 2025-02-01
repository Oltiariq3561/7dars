import { create } from "zustand";

const useLoginStore = create((set) => ({
  user: '',
  login: (username) => set({ user: { username } }),
  logout: () => set({ user: "" }),
}));

export default useLoginStore;
