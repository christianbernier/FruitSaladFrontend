import { Card, GameState } from '../../model';

export enum PlayActionType {
  UpdateGameState = '[Play] Update Game State',
  ClickCard = '[Play] Click Card',
}

export type PlayAction =
  | {
      type: PlayActionType.ClickCard;
      card: Card;
    }
  | {
      type: PlayActionType.UpdateGameState;
      gameState: GameState;
    };
