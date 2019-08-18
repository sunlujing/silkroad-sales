import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SilkroadSalesPage} from "./silkroad-sales-page";

@NgModule({
  declarations: [
    SilkroadSalesPage,
  ],
  entryComponents: [
    SilkroadSalesPage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ]
})
export class SilkroadSalesPageModule {}
