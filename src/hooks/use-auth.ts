import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { User } from "@/types";
import api from "@/api/axios";
import { useNavigate } from "react-router-dom";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  token_type: string;
  user: User;
}

export function useAuth() {
  const {
    user,
    isAuthenticated,
    token,
    setUser,
    setIsAuthenticated,
    setToken,
  } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const { data }: { data: User } = await api.get("/user");
        setUser(data);
        setIsAuthenticated(true);
      } catch (error) {
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
        navigate("/login");
      }
    };
    verifyToken();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { data }: { data: LoginResponse } = await api.post(
      "/login",
      credentials
    );
    if (data.token) {
      setToken(data.token);
      setUser(data.user);
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, token, login, logout };
}
