import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiparisListePage } from './siparis-liste';

@NgModule({
  declarations: [
    SiparisListePage,
  ],
  imports: [
    IonicPageModule.forChild(SiparisListePage),
  ],
})
export class SiparisListePageModule {}
