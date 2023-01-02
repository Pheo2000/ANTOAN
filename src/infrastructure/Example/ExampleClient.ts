import IAxiosConfigure from "@/config/IAxiosConfigure";
import { TYPES } from "@/config/types";
import { ApiError } from "@/domain/errors/ApiError";
import FailedToCallApiError from "@/domain/errors/FailedToCallApiError";
import { default as Axios } from "axios";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { convertApiErrorParams } from "../convertApiErrorParams";
import IExampleClient from "./IExampleClient";
import { Example } from "@/domain/models/Example/Example";

@injectable()
class ExampleClient implements IExampleClient {
  private client: IAxiosConfigure;

  constructor(
    @inject(TYPES.IAxiosConfigure)
    client: IAxiosConfigure,
  ) {
    this.client = client;
  }

  public async fetchExample(): Promise<Example[]> {
    return await this.client
      .getConfigure()
      .get<Example[]>("/api/v1/example")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (Axios.isAxiosError(error) && error.response) {
          throw new FailedToCallApiError(...convertApiErrorParams(error));
        }
        throw new Error("Internal server error");
      });
  }
}

export default ExampleClient;
