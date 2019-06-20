import {NgModule} from '@angular/core';
import {HeaderComponents} from '.';
import {BaseComponents} from '../..';
import {AuthService} from '../../../modules/auth/services/auth.service';

@NgModule({
  imports: [...BaseComponents],
  declarations: [...HeaderComponents],
  providers: [AuthService],
  exports: [...HeaderComponents]
})
export class HeaderModule {}
