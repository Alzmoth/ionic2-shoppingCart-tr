import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StokSepetPage } from './stok-sepet';

@NgModule({
  declarations: [
    StokSepetPage,
  ],
  imports: [
    IonicPageModule.forChild(StokSepetPage),
  ],
  exports: [
    StokSepetPage
  ]
})
export class StokSepetPageModule {}
