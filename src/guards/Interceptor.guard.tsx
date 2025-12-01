import { api } from "../Model/Api.model";

export const setupInterceptor = () => {
  api.interceptors.request.use(
    (config) => {
      console.log("es el interceptor");
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
