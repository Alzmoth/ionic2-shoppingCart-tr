import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiparisListePage } from "../siparis-liste/siparis-liste";
import { SiparisSepetPage } from "../siparis-sepet/siparis-sepet";
import { SiparisSatisPage } from "../siparis-satis/siparis-satis";

/**
 * Generated class for the SiparisTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis-tabs',
  templateUrl: 'siparis-tabs.html'
})
export class SiparisTabsPage {

  urunlerRoot = 'SiparisSatisPage'
  sepetRoot = 'SiparisSepetPage'
  siparislerRoot = 'SiparisListePage'


  constructor(public navCtrl: NavController) { 
    console.log("asd");

  }
  
}
