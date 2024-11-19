export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
  },
  RECORD: {
    BODY: "/api/records/body",
    EXERCISE: "/api/records/exercise",
    DIARY: "/api/records/diary",
  },
  COLUMN: {
    POSTS: "/api/column/posts",
  },
  PAGE: {
    ACHIEVEMENT: "/api/page/achievement",
    MEAL: "/api/page/meal",
  },
} as const;
