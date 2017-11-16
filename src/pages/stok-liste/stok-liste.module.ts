import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StokListePage } from './stok-liste';

@NgModule({
  declarations: [
    StokListePage,
  ],
  imports: [
    IonicPageModule.forChild(StokListePage),
  ],
})
export class StokListePageModule {}
