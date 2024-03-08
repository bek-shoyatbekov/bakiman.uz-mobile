import axios from "axios";

const BASE_URL = "http://10.0.2.2:5000/api/v1";

// const BASE_URL = "https://3245-213-230-110-176.ngrok-free.app/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
