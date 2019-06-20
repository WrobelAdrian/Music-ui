import {NgModule} from '@angular/core';
import {FooterComponents} from '.';
import {BaseComponents} from '../..';

@NgModule({
  imports: [...BaseComponents],
  declarations: [...FooterComponents],
  providers: [],
  exports: [...FooterComponents]
})
export class FooterModule {}
