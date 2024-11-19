import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { users } from "./data/users";
import { API_ENDPOINTS } from "../../constants/endpoints";

const mock = new MockAdapter(axios);

mock.onPost(API_ENDPOINTS.AUTH.LOGIN).reply((config) => {
  const { username, password } = JSON.parse(config.data);
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = `fake-jwt-token.${user.id}`;
    return [200, { token }];
  }
  return [401, { message: "Username or password is incorrect" }];
});

export default mock;
