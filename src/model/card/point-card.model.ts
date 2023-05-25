import {FruitType} from "../fruit.model";
import {PointCardType} from "./point-card-type.model";

export interface PointCard {
  id?: string,
  reverseType: FruitType,
  pointType: PointCardType,
  fruitTypes: FruitType[],
  pointValues: number[],
}