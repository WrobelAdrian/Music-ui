import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable()
export class EventsWebsocketService {
  constructor(private socket: Socket) {
    this.handleConnection();
  }

  handleConnection(): void {
    this.socket.on('connect', () => {
      console.log('Websocket connected');
    });
    this.socket.on('disconnect', () => {
      console.log('Websocket disconnected');
    });
  }

  sendEvent(event: any): void {
    this.socket.emit('event-create', event);
  }

  getEvent(): Observable<any> {
    return Observable.create(observer => {
      this.socket.on('events', data => {
        observer.next(data);
      });
    });
  }
}
