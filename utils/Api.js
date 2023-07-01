import axios from "axios";

const baseURL = process.env.API_BASE_URL || "https://devcore02.cimet.io/v1";
const apiKey = process.env.API_KEY || "4NKQ3-815C2-8T5Q2-16318-55301";
const authToken = process.env.AUTH_TOKEN;
const session_id =
  process.env.SESSION_ID ||
  "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"; // Provide the actual value through environment variable

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Api-key": apiKey,
    "Auth-token": authToken
  }
});

export default class Api {
  async getPlanList(token) {
    try {
      const response = await instance.post(
        "/plan-list",
        JSON.stringify({
          session_id: session_id
        }),
        {
          headers: {
            "Api-key": apiKey,
            "Auth-token": token,
            "Content-Type": "application/json"
          }
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Request failed. Please try again later.");
    }
  }

  async generateToken() {
    try {
      const response = await instance.post("/generate-token", {
        headers: {
          "Api-key": apiKey
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Request failed. Please try again later.");
    }
  }
}
