import MockAdapter from "axios-mock-adapter";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { mealData } from "./data/mealData";
import { achiverData } from "./data/achiverData";

export function setupTopPageMocks(mock: MockAdapter) {
  mock.onGet(API_ENDPOINTS.PAGE.ACHIEVEMENT).reply(200, {
    data: achiverData,
  });

  mock.onGet(API_ENDPOINTS.PAGE.MEAL).reply((config) => {
    const { page = 1, size = 8, type = "all" } = config.params || {};

    const filteredData =
      type === "all" ? mealData : mealData.filter((meal) => meal.type === type);

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const total = filteredData.length;
    const totalPages = Math.ceil(total / size);

    return [
      200,
      {
        data: paginatedData,
        total,
        currentPage: page,
        totalPages,
        hasMore: page < totalPages,
      },
    ];
  });
}
