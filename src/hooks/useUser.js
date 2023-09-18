import { create } from "zustand";

const useUser = create((set) => ({
    name : "",
    email: "",
    phone: "",
    insta: "",
    youtube: "",
    isOpen: false,
    addName: (data) => set((state) => ({ name : data })),
    addEmail: (data) => set((state) => ({ email : data })),
    addPhone: (data) => set((state) => ({ phone : data })),
    addInsta: (data) => set((state) => ({ insta : data })),
    addYoutube: (data) => set((state) => ({ youtube : data })),
    onOpen: () => set((state) => ({ isOpen: true })),
}))

export default useUser; 