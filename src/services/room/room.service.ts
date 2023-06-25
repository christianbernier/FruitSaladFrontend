import { GameState } from '../../model';
import { WebSocketService } from '../websocket/websocket.service';

export class RoomService {
  private webSocketService: WebSocketService = new WebSocketService();

  joinRoom(
    roomUid: string,
    playerName: string,
    onJoinRoom: (state: GameState) => void,
    onError: (error: Error) => void,
    onUpdateState: (state: GameState) => void
  ): void {
    const onMessageResponse = (event: MessageEvent): void => {
      const eventData = JSON.parse(event.data);
      const eventType = eventData.type;
      const eventPayload = eventData.payload;

      switch (eventType) {
        case 'ROOM_JOINED':
          onJoinRoom(eventPayload.initialState);
          break;
        case 'UPDATE_STATE':
          onUpdateState(eventPayload.state);
          break;
        case 'ROOM_DOES_NOT_EXIST':
          onError(new Error('Room does not exist.'));
          break;
      }
    };

    const onErrorResponse = (errorMessage: string): void => {
      onError(new Error(`Socket error: ${errorMessage}`));
    };

    this.webSocketService.initializeSocket(
      `/join?room=${roomUid}&name=${playerName}`,
      onMessageResponse,
      onErrorResponse
    );
  }

  startGame(): void {
    this.webSocketService.sendEvent({
      type: 'START_GAME',
      payload: {},
    });
  }
}
