import { useRoute } from "vue-router";
import { useAuthStore } from "../../store/authStore";
import type { AuthRequest } from "../../types/Auth";
import { useNavigation } from "./useNavigation";

export function useAuth() {
  const authStore = useAuthStore();
  const route = useRoute();
  const navigate = useNavigation();

  const handleAuth = async (
    action: "login" | "register",
    payload: AuthRequest
  ) => {
    if (authStore.isAuthenticated) {
      console.warn("Logging out...");
      localStorage.removeItem("authToken");
      authStore.uName = "";
      authStore.isAuthenticated = false;
      return;
    }
    try {
      if (action === "login") {
        localStorage.setItem("authToken", "login");
        //call api
        //check return
        authStore.uName = payload.userName;
        authStore.isAuthenticated = true;
        console.log("Login: ", payload);
      } else if (action === "register") {
        console.log("Register: ", payload);
      }
      navigate(route.query.redirect?.toString() || '/');
      console.log("Choose Action");
    } catch (error) {
      console.error(`failed`, error);
    } finally {
      // 'loding = false'
    }
  };

  return { handleAuth };
}
