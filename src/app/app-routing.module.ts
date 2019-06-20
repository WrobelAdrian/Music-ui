import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/auth/login';
import {RegisterComponent} from './modules/auth/register';
import {AppRouterUrls, AppRoutes} from './app-routing.config';
import {HomeComponent} from './modules/views/home';
import {AboutUsComponent} from './modules/views/about-us';
import {AlbumComponent} from './modules/views/album';
import {ArtistsComponent} from './modules/views/artists';
import {EventsComponent} from './modules/views/events';
import {GalleryComponent} from './modules/views/gallery';
import {NewsComponent} from './modules/views/news';
import {AuthGuard} from './_guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: AppRouterUrls.LOGIN, pathMatch: 'full'},
  {path: AppRoutes.LOGIN, component: LoginComponent},
  {path: AppRoutes.HOME, component: HomeComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.ABOUT_US, component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.ALBUM, component: AlbumComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.ARTISTS, component: ArtistsComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.EVENTS, component: EventsComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.GALLERY, component: GalleryComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.NEWS, component: NewsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
