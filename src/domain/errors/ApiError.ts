import { AxiosResponse } from "axios";

export interface ApiError<T = any> extends Error {
  request?: any;
  response?: AxiosResponse<T>;
}
