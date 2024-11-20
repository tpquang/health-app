import axios from "axios";
import { API_ENDPOINTS } from "../../constants/endpoints";
import "../../mocks/topPage";
import { type MealParams } from "../../types/api";
import { type TimeTypeParams } from "../../types/common";
import { convertTime } from "../../utils/datetime";

export const topPageService = {
  getAchievement: async () => {
    const response = await axios.get(API_ENDPOINTS.PAGE.ACHIEVEMENT);
    response.data.data.date = convertTime(response.data.data.date, {
      type: "date",
      format: "MM/DD",
    });
    return response.data;
  },

  getMeal: async (params?: MealParams) => {
    const response = await axios.get(API_ENDPOINTS.PAGE.MEAL, { params });
    response.data.data = response.data.data.map((meal: any) => ({
      ...meal,
      datedOn: convertTime(meal.createdAt, { type: "date" }),
    }));
    return response.data;
  },

  getBodyRecord: async (timeType: TimeTypeParams) => {
    const response = await axios.get(API_ENDPOINTS.RECORD.BODY, {
      params: timeType,
    });
    return response.data;
  },
};
