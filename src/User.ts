import faker from "faker";
import { getRandomCoordinate } from "./helpers/utils";
import { Markable } from "./interfaces/Markable";

export class User implements Markable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(){
    this.name = faker.name.firstName()
    this.location=getRandomCoordinate()
  }
}

