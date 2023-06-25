import { FruitCard } from '../card/fruit-card.model';
import { PointCard } from '../card/point-card.model';

export interface Player {
  name: string;
  pointCards?: PointCard[];
  fruitCards?: FruitCard[];
  score?: number;
}
