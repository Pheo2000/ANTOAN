import { Example } from "@/domain/models/Example/Example";

export default interface IExampleClient {
  fetchExample(): Promise<Example[]>;
}
