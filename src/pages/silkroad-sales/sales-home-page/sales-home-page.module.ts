import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesHomePage } from './sales-home-page';
import {SalesDetailPage} from '../sales-detail-page/sales-detail-page'

@NgModule({
  declarations: [
    SalesHomePage,
    SalesDetailPage
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[SalesHomePage,SalesDetailPage]
})
export class SalesHomePageModule {}
