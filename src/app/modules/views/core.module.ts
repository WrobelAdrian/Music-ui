import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AboutUsComponents} from './about-us';
import {AlbumComponents} from './album';
import {ArtistsComponents} from './artists';
import {EventsComponents} from './events';
import {GalleryComponents} from './gallery';
import {HomeComponents} from './home';
import {NewsComponents} from './news';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {EventsWebsocketService} from './services/events-websocket.service';
import {environment} from 'src/environments/environment';

const websocketConfig: SocketIoConfig = {url: environment.websocketUrl, options: {}};

@NgModule({
  imports: [SharedModule, SocketIoModule.forRoot(websocketConfig)],
  declarations: [
    ...AboutUsComponents,
    ...AlbumComponents,
    ...ArtistsComponents,
    ...EventsComponents,
    ...GalleryComponents,
    ...HomeComponents,
    ...NewsComponents
  ],
  providers: [EventsWebsocketService],
  exports: [
    ...AboutUsComponents,
    ...AlbumComponents,
    ...ArtistsComponents,
    ...EventsComponents,
    ...GalleryComponents,
    ...HomeComponents,
    ...NewsComponents
  ]
})
export class CoreModule {}
