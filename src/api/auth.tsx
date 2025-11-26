import api from "./axios";

export const authService = {
  async login(email: string, password: string) {
    const response = await api.post("/login", { email, password });
    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    const response = await api.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    });
    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async logout() {
    try {
      await api.post("/logout");
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    }
  },

  isAuthenticated() {
    return !!localStorage.getItem("auth_token");
  },
};
