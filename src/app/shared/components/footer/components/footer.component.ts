import { Component, OnInit } from '@angular/core';
import {AppRouterUrls} from '../../../../app-routing.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu = Object.values(AppRouterUrls).slice(2, Object.values(AppRouterUrls).length);
  iconList = ['icon1', 'icon2', 'icon3'];
  constructor() { }

  ngOnInit() {
  }

}
