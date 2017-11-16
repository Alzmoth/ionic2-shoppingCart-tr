import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeGosterPage } from './liste-goster';

@NgModule({
  declarations: [
    ListeGosterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeGosterPage),
  ],
})
export class ListeGosterPageModule {}
