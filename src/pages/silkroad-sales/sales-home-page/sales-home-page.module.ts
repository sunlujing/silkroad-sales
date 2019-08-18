import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesHomePage } from './sales-home-page';

@NgModule({
  declarations: [
    SalesHomePage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[SalesHomePage]
})
export class SalesHomePageModule {}
