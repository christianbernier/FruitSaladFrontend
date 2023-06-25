import { FruitCard, GameProgress, Player, PointCard } from '../../model';

export type PlayState = {
  roomUid: string | null;
  players: Player[];
  gameProgress: GameProgress;
  fruitMarket: {
    pointCards: (PointCard | null)[];
    fruitCards: (FruitCard | null)[];
  };
  cardsClicked: (PointCard | FruitCard)[];
  serverError: string | null;
};

export const initialPlayState: PlayState = {
  roomUid: null,
  players: [],
  gameProgress: GameProgress.JOINING,
  fruitMarket: {
    pointCards: [],
    fruitCards: [],
  },
  cardsClicked: [],
  serverError: null,
};
