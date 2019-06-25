import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/auth/login';
import {AppRouterUrls, AppRoutes} from './app-routing.config';
import {MainComponent} from './modules/views/main/main.component';
import {HomeComponent} from './modules/views/home';
import {AuthGuard} from './_guards/auth.guard';
import {AboutUsComponent} from './modules/views/about-us';
import {AlbumComponent} from './modules/views/album';
import {ArtistsComponent} from './modules/views/artists';
import {EventsComponent} from './modules/views/events';
import {GalleryComponent} from './modules/views/gallery';
import {NewsComponent} from './modules/views/news';


const routes: Routes = [
  {path: '', redirectTo: AppRouterUrls.LOGIN, pathMatch: 'full'},
  {path: AppRoutes.LOGIN, component: LoginComponent},
  {path: AppRoutes.MAIN, component: MainComponent, canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full'},
      {path: AppRoutes.HOME, component: HomeComponent},
      {path: AppRoutes.ABOUT_US, component: AboutUsComponent},
      {path: AppRoutes.ALBUM, component: AlbumComponent},
      {path: AppRoutes.ARTISTS, component: ArtistsComponent},
      {path: AppRoutes.EVENTS, component: EventsComponent},
      {path: AppRoutes.GALLERY, component: GalleryComponent},
      {path: AppRoutes.NEWS, component: NewsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
