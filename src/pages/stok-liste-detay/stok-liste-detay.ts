import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";

/**
 * Generated class for the StokListeDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stok-liste-detay',
  templateUrl: 'stok-liste-detay.html',
})
export class StokListeDetayPage {

 
  resposeData:any;
  gelen: any;
  public dataSet: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService) {

    this.gelen = navParams.get('item');
    
   console.log(this.gelen)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StokListeDetayPage');
    this.stok_liste_detay_getir()
  }


  stok_liste_detay_getir(){
    
    this.authService.postData(this.gelen, "stok_liste_detay_getir")
      .then((result) => {
        
        this.resposeData = result;
        
        this.dataSet = this.resposeData.feedData;
        console.log(this.dataSet);

      }, (err) => {
        //Connection failed message
      });


  }
}
