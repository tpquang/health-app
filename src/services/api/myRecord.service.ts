import axios from "axios";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { type DiaryParams } from "../../types/api";
import { convertTime } from "../../utils/datetime";
import { TimeTypeParams } from "../../types/common";
import { DiaryType } from "../../types/diary.type";

export const myRecordService = {
  getExercise: async () => {
    const response = await axios.get(API_ENDPOINTS.RECORD.EXERCISE);
    return response.data;
  },
  
  getDiary: async (params?: DiaryParams) => {
    const response = await axios.get(API_ENDPOINTS.RECORD.DIARY, { params });
    response.data.data = response.data.data.map((diary: DiaryType) => ({
      ...diary,
      date: convertTime(diary.createdOn, { type: "date", format: "YYYY.MM.DD" }),
      time: convertTime(diary.createdOn, { type: "time" }),
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
