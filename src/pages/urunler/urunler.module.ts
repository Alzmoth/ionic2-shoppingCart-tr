import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrunlerPage } from './urunler';

@NgModule({
  declarations: [
    UrunlerPage,
  ],
  imports: [
    IonicPageModule.forChild(UrunlerPage),
  ],
})
export class UrunlerPageModule {}
