import { Card, GameState } from '../../model';

export enum PlayActionType {
  SetRoomUid = '[Play] Set Room UID',
  UpdateGameState = '[Play] Update Game State',
  UpdateServerError = '[Play] Update Server Error',
  ClickCard = '[Play] Click Card',
}

export type PlayAction =
  | {
      type: PlayActionType.SetRoomUid;
      roomUid: string;
    }
  | {
      type: PlayActionType.UpdateGameState;
      gameState: GameState;
    }
  | {
      type: PlayActionType.UpdateServerError;
      serverError: string;
    }
  | {
      type: PlayActionType.ClickCard;
      card: Card;
    };
