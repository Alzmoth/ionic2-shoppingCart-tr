import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stoksepetprovider } from '../../providers/stok-sepet-provider'
import {SayimSepetUrun} from '../../entities/sayim-sepet-urun'
import {StokSayımPage} from '../stok-sayım/stok-sayım'
import { Common } from "../../providers/common";
import { AuthService } from "../../providers/auth-service";
/**
 * Generated class for the StokSepetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stok-sepet',
  templateUrl: 'stok-sepet.html',
})
export class StokSepetPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public stoksepetservis: stoksepetprovider,
    public common: Common,
    public authService: AuthService) {
  }
  //componentler
  public userDetails: any;


//liste adı ve userid de gönderilmesi gerekiyor

  sayimsepetUrun: SayimSepetUrun[] = [];

  ionViewDidLoad() {
    this.sayimsepetUrun = this.stoksepetservis.list();
    console.log(this.sayimsepetUrun)
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    

  }

  kaydet(){ 
    this.stoksepetservis.stokkayit();

  }
  stoksayim(){ // yonlendirme

    this.navCtrl.push(StokSayımPage);
  }
 

}
