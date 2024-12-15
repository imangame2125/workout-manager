import AxiosService from "./axios-service";

// App axios service
export const AppApi = new AxiosService(
  process.env.REACT_APP_BASE_URL as string,
  false
);
