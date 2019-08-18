import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesPartnerPage } from './sales-partner-page';

@NgModule({
  declarations: [
    SalesPartnerPage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[SalesPartnerPage]
})
export class SalesPartnerPageModule {}
