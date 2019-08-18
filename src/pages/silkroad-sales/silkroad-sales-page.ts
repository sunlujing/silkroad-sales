import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';
import {SalesHomePage} from "./sales-home-page/sales-home-page";
import {SalesPartnerPage} from "./sales-partner-page/sales-partner-page";
import {SilkroadNewsPage} from "./silkroad-news-page/silkroad-news-page";
import {MyProfilePage} from "./my-profile-page/my-profile-page";


@IonicPage()
@Component({
  selector: 'page-silkroad-sales-page',
  templateUrl: 'silkroad-sales-page.html'
})
export class SilkroadSalesPage {
  @ViewChild('mainTabs') tabs: Tabs;
  homePage: any = SalesHomePage;
  partnerPage: any = SalesPartnerPage;
  silkRoadPage: any = SilkroadNewsPage;
  profilePage: any = MyProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
  }

}
