import axios, { AxiosInstance } from "axios";
import { injectable } from "inversify";
import "reflect-metadata";
import IAxiosConfigure from "./IAxiosConfigure";

@injectable()
class AxiosConfigure implements IAxiosConfigure {
  private axiosInstance: AxiosInstance;
  constructor() {
    const baseURL = process.env.BE_ENDPOINT || "http://localhost:8080";
    this.axiosInstance = axios.create({
      baseURL,
      timeout: process.env.SERVER_TIMEOUT
        ? Number(process.env.SERVER_TIMEOUT)
        : 90000,
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.API_KEY || "",
      },
    });
  }

  public getConfigure(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default AxiosConfigure;
