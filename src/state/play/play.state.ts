import { FruitCard } from '../../model/card/fruit-card.model';
import { PointCard } from '../../model/card/point-card.model';
import { Player } from '../../model/player/player.model';
import { GameProgress } from '../../model/state/game-progress.model';

export type PlayState = {
  roomId: string | null;
  players: Player[];
  gameProgress: GameProgress;
  fruitMarket: {
    pointCards: (PointCard | null)[];
    fruitCards: (FruitCard | null)[];
  };
  cardsClicked: (PointCard | FruitCard)[];
};

export const initialPlayState: PlayState = {
  roomId: null,
  players: [],
  gameProgress: GameProgress.JOINING,
  fruitMarket: {
    pointCards: [],
    fruitCards: [],
  },
  cardsClicked: [],
};
