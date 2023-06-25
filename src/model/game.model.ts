import { FruitCard, PointCard } from './card.model';
import { Player } from './player.model';

export enum GameProgress {
  JOINING = 'JOINING',
  WAITING_TO_START = 'WAITING_TO_START',
  IN_PROGRESS = 'IN_PROGRESS',
  GAME_OVER = 'GAME_OVER',
}

export type GameState = {
  roomUid: string;
  pointCards?: (PointCard | null)[];
  fruitCards?: (FruitCard | null)[];
  players: Player[];
  gameProgress: GameProgress;
  turn?: number;
};
