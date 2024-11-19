export interface IAuthUser {
  id: number
  username: string
  password: string
  email: string
}

export const users: IAuthUser[] = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    email: "admin@example.com",
  },
  {
    id: 2,
    username: "user1",
    password: "user123",
    email: "user1@example.com",
  }
] 