import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrunDetayPage } from './urun-detay';

@NgModule({
  declarations: [
    UrunDetayPage,
  ],
  imports: [
    IonicPageModule.forChild(UrunDetayPage),
  ],
  exports: [
    UrunDetayPage
  ]
})
export class UrunDetayPageModule {}
