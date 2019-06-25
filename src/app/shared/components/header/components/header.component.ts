import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../modules/auth/services/auth.service';
import {AppRouterUrls} from '../../../../app-routing.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = Object.values(AppRouterUrls).slice(2, Object.values(AppRouterUrls).length);
  searchInput;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
  }

  async search() {
  }
}
