import { Component ,ViewChild} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'my-profile-page',
  templateUrl: 'my-profile-page.html',
})
export class MyProfilePage {
  @ViewChild('input_user_name') myInput ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.myInput.setFocus();
    },150);
    console.log('ionViewDidLoad TabMorePagePage');
  }

}
