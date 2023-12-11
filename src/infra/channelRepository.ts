import { api } from "../../api";

export function fetchChannels() {
  return api.get("/channels");
}
