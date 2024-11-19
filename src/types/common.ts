export interface PaginationParams {
  page?: number;
  size?: number;
}

export interface PaginationResponse {
  total: number;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
} 