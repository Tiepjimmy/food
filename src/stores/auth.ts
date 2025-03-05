import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  surname: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref<any>({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.token);
  }

  function setError(error: any) {
    if (error && error.data && error.data.errors) {
      errors.value = error.data.errors;
    } else {
      errors.value = { general: "Có lỗi xảy ra, vui lòng thử lại" };
    }
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = {};
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("users/login", credentials)
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response);
        });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("users/register", credentials)
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response);
        });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
        .then(() => {
          setError({});
        })
        .catch(({ response }) => {
          setError(response);
        });
  }

  function verifyAuth() {
    const token = JwtService.getToken();

    if (token) {
      ApiService.setHeader();
      ApiService.post("verify_token", { token: token })
          .then(({ data }) => {
            setAuth(data);
          })
          .catch(({ response }) => {
            setError(response.data.errors);
            purgeAuth();
          });
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});