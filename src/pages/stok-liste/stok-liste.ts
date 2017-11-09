import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import {StokSepetPage} from '../stok-sepet/stok-sepet'
import { MomentModule } from 'angular2-moment';
/**
 * Generated class for the StokListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stok-liste',
  templateUrl: 'stok-liste.html',
})
export class StokListePage {

  public resposeData: any;
  public dataSet: any[] = [];

   stokPostData = {
    "user_id": "",
    "token": "",
    "stok_kayit_id": "",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService,
    public app:App) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StokListePage');
    this.getliste();

  }


  getliste() {
    console.log("asd");
    this.authService.postData(this.stokPostData, "stok_listesi_getir")
      .then((result) => {
        this.resposeData = result;
        this.dataSet = this.resposeData.feedData;
        console.log(this.dataSet);

      }, (err) => {
        //Connection failed message
      });

  }
  saatCevir(time) {

    let a = new Date(time * 1000);
    return a;
  }
  
  itemTapped(event, urun){
    this.navCtrl.push(StokSepetPage, { item: urun });
  }

}

