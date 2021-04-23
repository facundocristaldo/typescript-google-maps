import faker from "faker";
import { getRandomCoordinate } from "./helpers/utils";
import { Markable } from "./interfaces/Markable";

export class Company implements Markable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = getRandomCoordinate();
  }
}
