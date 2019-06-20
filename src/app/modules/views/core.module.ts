import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AboutUsComponents} from './about-us';
import {AlbumComponents} from './album';
import {ArtistsComponents} from './artists';
import {EventsComponents} from './events';
import {GalleryComponents} from './gallery';
import {HomeComponents} from './home';
import {NewsComponents} from './news';


@NgModule({
  imports: [SharedModule],
  declarations: [
    ...AboutUsComponents,
    ...AlbumComponents,
    ...ArtistsComponents,
    ...EventsComponents,
    ...GalleryComponents,
    ...HomeComponents,
    ...NewsComponents
  ],
  providers: [],
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
