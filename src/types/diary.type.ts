export interface DiaryType {
  id: number;
  title: string; 
  description: string;
  createdOn: string;
  date?: string;
  time?: string;
}

export interface DiaryParams {
  page: number;
  limit: number;
}
