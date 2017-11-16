import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SepetPage } from './sepet';

@NgModule({
  declarations: [
    SepetPage,
  ],
  imports: [
    IonicPageModule.forChild(SepetPage),
  ],
})
export class SepetPageModule {}
