import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Urun } from '../../entities/sayimurun'

import {stoksepetprovider} from '../../providers/stok-sepet-provider'

@IonicPage()
@Component({
  selector: 'page-urun-detay',
  templateUrl: 'urun-detay.html',
})
export class UrunDetayPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public stoksepetservis:stoksepetprovider,
     public toastController:ToastController) {
    this.selectedUrun = navParams.get('item');

    
  }
  selectedUrun: Urun;



  ionViewDidLoad() {
 
  }

  
  addToCart(urun:Urun){
    this.stoksepetservis.addToCart(urun);
    
    this.showToast(); 
    console.log(this.selectedUrun)
    
      this.navCtrl.pop();
    
  }
  showToast(){
    let toast=this.toastController.create({
      message:'Urun Sayim Listesine Eklendi',
      duration:50,
      position:'bottom'
    });
    toast.present();
  }


}

