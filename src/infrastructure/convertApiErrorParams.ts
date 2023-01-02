import { AxiosError } from "axios";

type ExceptionResponse = [string, number | undefined];

/**
 * APIエラーをコンバート
 * @param error
 * @returns
 */
export const convertApiErrorParams = (error: AxiosError): ExceptionResponse => {
  // エラーレスポンス未定義
  if (!error) {
    return ["INTERNAL_SERVER_ERROR", 500];
  }
  const message = error.message;
  const statusCode = error.response?.status;
  console.log("message:", message);
  console.log("status:", statusCode);
  return [message, statusCode];
};
