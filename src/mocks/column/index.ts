import MockAdapter from "axios-mock-adapter";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { postData } from "./data/postData";
import { CONFIG } from "../../config";

export function setupColumnMocks(mock: MockAdapter) {
  mock.onGet(API_ENDPOINTS.COLUMN.POSTS).reply((config) => {
    const { page = 1, limit = CONFIG.PAGE_LIMIT } = config.params || {};

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = postData.slice(startIndex, endIndex);
    const total = postData.length;
    const totalPages = Math.ceil(total / limit);

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
