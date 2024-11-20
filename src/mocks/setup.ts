import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { setupColumnMocks } from "./column";
import { setupTopPageMocks } from "./topPage";
import { setupMyRecordMocks } from "./myRecords";
import { setupAuthMocks } from "./auth/auth.api";
export function setupMocks() {
  const mock = new MockAdapter(axios);

  setupColumnMocks(mock);
  setupTopPageMocks(mock);
  setupMyRecordMocks(mock);
  setupAuthMocks(mock);
  console.log("Mocks initialized");
}