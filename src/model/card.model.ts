import { FruitType } from './fruit.model';

export enum CardType {
  FRUIT = 'FRUIT',
  POINT = 'POINT',
}

export type FruitCard = {
  type: CardType.FRUIT;
  uid: string;
  fruit: FruitType;
};

export enum PointCardType {
  LINEAR = 'LINEAR',
  DIFF_SET = 'DIFF_SET',
  SAME_SET = 'SAME_SET',
  FEWEST_OF_TYPE = 'FEWEST_OF_TYPE',
  MOST_OF_TYPE = 'MOST_OF_TYPE',
  FEWEST_FRUIT = 'FEWEST_FRUIT',
  MOST_FRUIT = 'MOST_FRUIT',
  EVEN_ODD = 'EVEN_ODD',
  FRUIT_SALAD = 'FRUIT_SALAD',
  MISSING_TYPE = 'MISSING_TYPE',
  AT_LEAST_2 = 'AT_LEAST_TWO',
  AT_LEAST_3 = 'AT_LEAST_THREE',
}

export type PointCard = {
  type: CardType.POINT;
  uid: string;
  pointType: PointCardType;
  reverseFruit: FruitType;
  fruitTypes: FruitType[];
  pointValues: number[];
};

export type Card = FruitCard | PointCard;
