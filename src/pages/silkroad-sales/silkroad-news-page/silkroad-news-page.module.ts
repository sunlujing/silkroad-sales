import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { TabDiscoverPage } from './tab-discover-page';
import {SilkroadNewsPage} from "./silkroad-news-page";

@NgModule({
  declarations: [
    SilkroadNewsPage,
  ],
  imports: [
    IonicPageModule,
    // IonicPageModule.forChild(TabDiscoverPage),
  ],
  entryComponents:[
    SilkroadNewsPage,
  ],
  exports: [
    IonicPageModule
  ]
})
export class SilkroadNewsPageModule {}
