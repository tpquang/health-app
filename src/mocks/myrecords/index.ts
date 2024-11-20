import MockAdapter from "axios-mock-adapter";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { myExerciseData } from "./data/myExerciseData";
import { bodyRecordsData } from "./data/bodyRecordsData";
import { myDiaryData } from "./data/myDiaryData";
import { BodyRecord as BodyRecordType } from "../../types/bodyRecord.type";
import { CONFIG } from "../../config";

export function setupMyRecordMocks(mock: MockAdapter) {
  mock.onGet(API_ENDPOINTS.RECORD.EXERCISE).reply(200, {
    data: myExerciseData.map((item) => ({
      id: item.id,
      activity: item.activity,
      energyConsumption: item.energyConsumption,
      activityTime: item.activityTime,
      createdOn: item.createdOn,
    })),
  });

  mock.onGet(API_ENDPOINTS.RECORD.BODY).reply((config) => {
    const { timeType = "month" } = config.params || {};
    const typedTimeType = timeType as keyof typeof bodyRecordsData;
    return [
      200,
      {
        data: bodyRecordsData[typedTimeType].map((item: BodyRecordType) => ({
          id: item.id,
          name: item.name,
          weight: item.weight,
          bodyFat: item.fat,
        })),
      },
    ];
  });

  mock.onGet(API_ENDPOINTS.RECORD.DIARY).reply((config) => {
    const { page = 1, limit = CONFIG.PAGE_LIMIT } = config.params || {};
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = myDiaryData.slice(startIndex, endIndex);
    return [
      200,
      {
        data: paginatedData,
        total: myDiaryData.length,
        currentPage: page,
        totalPages: Math.ceil(myDiaryData.length / limit),
      },
    ];
  });
}
