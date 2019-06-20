import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {

  private socket: WebSocketSubject<any>;
  constructor() {
    console.log('EVENTS')
    this.socket = WebSocketSubject.create('ws://localhost:3001/events');

    this.socket.subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
