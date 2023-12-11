import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.pluto.tv/v2",
  timeout: 1000
});
