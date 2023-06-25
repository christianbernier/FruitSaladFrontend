import { FruitCard } from "../../model/card/fruit-card.model"
import { PointCard } from "../../model/card/point-card.model"
import { GameState } from "../../model/state/state.model"

export enum PlayActionType {
  UpdateGameState = '[Play] Update Game State',
  ClickCard = '[Play] Click Card',
}

export type PlayAction = {
  type: PlayActionType.ClickCard,
  card: FruitCard | PointCard,
} | {
  type: PlayActionType.UpdateGameState,
  gameState: GameState,
}