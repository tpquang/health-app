import axios from 'axios'
import { LoginCredentials } from '../../types/auth.types'
import { API_ENDPOINTS } from "../../constants/endpoints";

export const authService = {
  login: async ({ username, password }: LoginCredentials) => {
    try {
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, { username, password });
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
} 