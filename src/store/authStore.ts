import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    uName: "",
    isAuthenticated: false,
  }),
});
