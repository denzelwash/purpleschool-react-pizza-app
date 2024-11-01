import axios, { AxiosError, AxiosInstance } from "axios";
import { toast } from "sonner";

export const API_URL = "https://purpleschool.ru/pizza-api-demo";
const REQUEST_TIMEOUT = 5000;

const api = ((): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  instance.interceptors.response.use(null, (error) => {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message, {
        position: "top-right",
      });
    }
    return Promise.reject(error);
  });

  return instance;
})();

export default api;
