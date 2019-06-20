import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthorizationInterceptor} from './_interceptors/authorization.interceptor';
import {AuthModule} from './modules/auth/auth.module';
import {CoreModule} from './modules/views/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    AuthModule
  ],
  providers: [
    CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
