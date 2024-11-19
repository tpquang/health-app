import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_ENDPOINTS } from '../../constants/endpoints';
import { myExerciseData } from './data/myExerciseData';
import { bodyRecordsData } from './data/bodyRecordsData';
import { myDiaryData } from './data/myDiaryData';

const mock = new MockAdapter(axios);

mock.onGet(API_ENDPOINTS.RECORD.EXERCISE).reply(200, {
  data: myExerciseData.map(item => ({
    id: item.id,
    name: item.activity,
    kcal: parseInt(item.energyConsumption),
    time: parseInt(item.activityTime)
  }))
});

mock.onGet(API_ENDPOINTS.RECORD.BODY).reply(200, {
  data: bodyRecordsData.year.map(item => ({
    id: item.id,
    date: item.name,
    weight: item.uv,
    bodyFat: item.pv
  }))
});

mock.onGet(API_ENDPOINTS.RECORD.DIARY).reply((config) => {
  const { page = 1, limit = 8 } = config.params || {};
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedData = myDiaryData.slice(startIndex, endIndex);
  return [200, {
    data: paginatedData,
    total: myDiaryData.length,
    currentPage: page,
    totalPages: Math.ceil(myDiaryData.length / limit)
  }];
});
export default mock;
