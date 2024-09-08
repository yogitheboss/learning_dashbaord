import apiCaller from "@/utils/apiCaller";
import create from "zustand";
export const useUserStore = create((set) => ({
  user: null,
  token:null,
  setUser: (user) =>
    set({
      user,
    }),
  fetchUser:(email)=>{
    apiCaller("GET",`/user/${email}`).then((res)=>{
      console.log(res)
      set({user:res})
    }).catch((err)=>{
      console.log(err)
    })
  },
  setToken:(token)=>{
    set({token:token})
  }
}));
