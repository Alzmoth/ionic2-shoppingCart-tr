import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StokSayımPage } from './stok-sayım';

@NgModule({
  declarations: [
    StokSayımPage,
  ],
  imports: [
    IonicPageModule.forChild(StokSayımPage),
  ],
})
export class StokSayımPageModule {}
