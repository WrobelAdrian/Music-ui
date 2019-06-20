import {NgModule} from '@angular/core';
import {LoginComponents} from './login';
import {SharedModule} from '../../shared/shared.module';
import {RegisterComponents} from './register';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [SharedModule],
  declarations: [...RegisterComponents, ...LoginComponents],
  providers: [AuthService],
  exports: [...LoginComponents],
  entryComponents: [...RegisterComponents]
})
export class AuthModule {}
