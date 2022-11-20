import axios from "axios";
import { ADDRESS } from "../../keys";

export const api = axios.create({
  baseURL: `http://${ADDRESS}:3001`,
});
