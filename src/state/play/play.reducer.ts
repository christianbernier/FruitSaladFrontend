import { PlayAction, PlayActionType } from './play.actions';
import { PlayState } from './play.state';

export function playReducer(
  prevState: PlayState,
  action: PlayAction
): PlayState {
  switch (action.type) {
    case PlayActionType.SetRoomUid: {
      return {
        ...prevState,
        roomUid: action.roomUid,
      };
    }
    case PlayActionType.UpdateGameState: {
      const updatedState = action.gameState;
      return {
        ...prevState,
        players: updatedState.players,
        gameProgress: updatedState.gameProgress,
        fruitMarket: {
          pointCards: updatedState.pointCards || [],
          fruitCards: updatedState.fruitCards || [],
        },
      };
    }
    case PlayActionType.UpdateServerError: {
      return {
        ...prevState,
        serverError: action.serverError,
      };
    }
    case PlayActionType.ClickCard: {
      return {
        ...prevState,
        cardsClicked: [...prevState.cardsClicked, action.card],
      };
    }
    default: {
      return prevState;
    }
  }
}
