import axios from "axios";
import { API_ENDPOINTS } from "../../constants/endpoints";
import "../../mocks/column";

interface ColumnParams {
  page?: number;
  limit?: number;
}

export const columnService = {
  getPosts: async (params?: ColumnParams) => {
    const response = await axios.get(API_ENDPOINTS.COLUMN.POSTS, { params });
    return response.data;
  },
};
