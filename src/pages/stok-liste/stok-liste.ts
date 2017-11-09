import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
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
    public authService: AuthService) {
      
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

}
