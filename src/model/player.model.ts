import { FruitCard, PointCard } from './card.model';

export type Player = {
  uid: string;
  name: string;
  pointCards?: PointCard[];
  fruitCards?: FruitCard[];
  score?: number;
};
