import {NgModule} from '@angular/core';
import {BaseComponents} from './index';
import {AppRoutingModule} from '../app-routing.module';
import {MusicService} from './services/music.service';
import {UsersService} from './services/users.service';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';

@NgModule({
  imports: [
    ...BaseComponents,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [MusicService, UsersService],
  declarations: [],
  exports: [
    ...BaseComponents,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SharedModule {}
