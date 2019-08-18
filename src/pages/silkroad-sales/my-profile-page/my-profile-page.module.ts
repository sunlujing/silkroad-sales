import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfilePage } from './my-profile-page';

@NgModule({
  declarations: [
    MyProfilePage,
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    IonicPageModule
  ],
  entryComponents:[MyProfilePage]
})
export class MyProfilePageModule {}
