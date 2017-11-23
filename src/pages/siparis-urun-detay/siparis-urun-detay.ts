import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Urun } from '../../entities/satisurun'

import {stoksepetprovider} from '../../providers/stok-sepet-provider'
/**
 * Generated class for the SiparisUrunDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis-urun-detay',
  templateUrl: 'siparis-urun-detay.html',
})
export class SiparisUrunDetayPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public stoksepetservis: stoksepetprovider,
    public toastController: ToastController) {
    this.selectedUrun = navParams.get('item');
    this.selectedUrun.stok_adet=1;
    console.log(this.selectedUrun)


  }
  selectedUrun: Urun;



  ionViewDidLoad() {

  }


  addToCart(urun: Urun) { //yeni addtocard eklenecek satış için

    //this.stoksepetservis.addToCart();
    this.showToast();
    console.log(this.selectedUrun)

    this.navCtrl.pop();
 
  }
  showToast() {
    let toast = this.toastController.create({
      message: 'Urun Sayim Listesine Eklendi',
      duration: 50,
      position: 'bottom'
    });
    toast.present();
  }


}
