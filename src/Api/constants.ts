import axios from "axios";

// const BASE_URL = "https://z73fb93d-5000.euw.devtunnels.ms/api/v1";

const BASE_URL = "https://3245-213-230-110-176.ngrok-free.app/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
