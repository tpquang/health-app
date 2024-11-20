import axios from "axios";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { convertTime } from "../../utils/datetime";
import { type ColumnParams } from "../../types/api";

export const columnService = {
  getPosts: async (params?: ColumnParams) => {
    const response = await axios.get(API_ENDPOINTS.COLUMN.POSTS, { params });
    response.data.data = response.data.data.map((post: any) => ({ 
      ...post,
      date: convertTime(post.createdOn, { type: "date" }),
      time: convertTime(post.createdOn, { type: "time" }),
    }));
    return response.data;
  },
};
