import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { setupColumnMocks } from "./column";
import { setupTopPageMocks } from "./topPage";
import { setupMyRecordMocks } from "./myRecords";

export function setupMocks() {
  const mock = new MockAdapter(axios);

  setupColumnMocks(mock);
  setupTopPageMocks(mock);
  setupMyRecordMocks(mock);

  console.log("Mocks initialized");
}