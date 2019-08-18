import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {SilkroadSalesApp} from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import {Data} from '../providers/data';
import {HttpModule} from "@angular/http";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {LookService} from "../providers/look-service";
import {SuperTabsModule} from "ionic2-super-tabs";
import {MyProfilePageModule} from "../pages/silkroad-sales/my-profile-page/my-profile-page.module";
import {SalesHomePageModule} from "../pages/silkroad-sales/sales-home-page/sales-home-page.module";
import {SalesPartnerPageModule} from "../pages/silkroad-sales/sales-partner-page/sales-partner-page.module";
import {SilkroadNewsPageModule} from "../pages/silkroad-sales/silkroad-news-page/silkroad-news-page.module";
import {SilkroadSalesPageModule} from "../pages/silkroad-sales/silkroad-sales-page.module";
@NgModule({
  declarations: [
    SilkroadSalesApp,
  ],
  imports: [
    LazyLoadImageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SilkroadSalesApp,{
      tabsHideOnSubPages: 'true' ,       //隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),//就这里
    MyProfilePageModule,
    SalesHomePageModule,
    SalesPartnerPageModule,
    SilkroadNewsPageModule,
    SilkroadSalesPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SilkroadSalesApp,
  ],
  providers: [
    Data,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LookService,
  ]
})
export class SilkroadSalesAppModule {
}
