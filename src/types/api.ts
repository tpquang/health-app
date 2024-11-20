export interface ApiResponse<T> {
  data: T
  message: string
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

export interface ApiError {
  message: string
  code: string
  status: number
}

export interface ColumnParams {
  page?: number;
  limit?: number;
}

export interface MealParams {
  page?: number;
  limit?: number;
  type?: string;
}

export interface DiaryParams {
  page?: number;
  limit?: number;
}