import axios from "axios";

const BASE_URL = "https://buyconnect.herokuapp.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBiMzkzM2ExZGU2ZGM2MjcxOTdmNjUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjI5MDkzNDQsImV4cCI6MTY2Mjk1MjU0NH0.nHHsxq1L5tVcag7p1oj8Qbo_sq_ijD0hEE7s-3fAoHA"
localStorage.setItem("token", JSON.stringify(TOKEN));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
