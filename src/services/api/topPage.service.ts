import axios from "axios";
import { API_ENDPOINTS } from "../../constants/endpoints";
import "../../mocks/topPage";

interface ColumnParams {
  page?: number;
  limit?: number;
}

export const topPageService = {
  getAchievement: async () => {
    const response = await axios.get(API_ENDPOINTS.PAGE.ACHIEVEMENT);
    return response.data;
  },

  getMeal: async (params?: ColumnParams) => {
    const response = await axios.get(API_ENDPOINTS.PAGE.MEAL, { params });
    return response.data;
  },

  getBodyRecord: async () => {
    const response = await axios.get(API_ENDPOINTS.RECORD.BODY);
    return response.data;
  },
};