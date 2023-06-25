import { PointCard } from '../card/point-card.model';
import { FruitCard } from '../card/fruit-card.model';
import { Player } from '../player/player.model';
import { GameProgress } from './game-progress.model';

export interface GameState {
  roomId: string;
  pointCards?: (PointCard | null)[];
  fruitCards?: (FruitCard | null)[];
  players: Player[];
  gameProgress: GameProgress;
  turn?: number;
}
