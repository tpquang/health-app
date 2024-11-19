// import axios from 'axios'
import { LoginCredentials } from '../../types/auth.types'
// import { API_ENDPOINTS } from "../../constants/endpoints";
import { users } from "../../mocks/auth/data/users";

export const authService = {
  login: async ({ username, password }: LoginCredentials) => {
    try {
      // const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, { username, password });
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        const token = `fake-jwt-token.${user.id}`;
        localStorage.setItem("token", token);
        return { code: 200, token };
      }
      return { code: 401, message: "Username or password is incorrect" };
      // return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
} 