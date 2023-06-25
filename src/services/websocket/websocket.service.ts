export class WebSocketService {
    private socket: WebSocket | null = null;
  
    public initializeSocket(url: string, onMessage: (event: MessageEvent) => void, onError: (event: string) => void) {
      const connection: WebSocket = new WebSocket(`ws://localhost:8001${url}`);
      this.socket = connection;
  
      connection.onmessage = (event: MessageEvent): void => {
        onMessage(event);
      }

      connection.onerror = (): void => {
        onError("Socket responded with error.");
      }
    }
  
    public sendEvent(event: object): void {
      if (!this.socket) {
        return;
      }
  
      this.socket.send(JSON.stringify(event));
    }
  }