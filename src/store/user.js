import apiCaller from "@/utils/apiCaller";
import create from "zustand";
export const useUserStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) =>
    set({
      user,
    }),
  fetchUser: (email) => {
    apiCaller("GET", `/user/${email}`)
      .then((res) => {
        set({ user: res });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setRole: async (role) => {
    console.log(role)
    let res = await apiCaller("put", `/user/role`, { role: role });
    if (res.status === "success") {
      set({ user: res.user });
    }
  },
  setToken: (token) => {
    set({ token: token });
  },
}));
