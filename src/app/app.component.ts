import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

(window as any).global = window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected cookies: CookieService) {
    // this.cookies.delete('token');
  }
}
