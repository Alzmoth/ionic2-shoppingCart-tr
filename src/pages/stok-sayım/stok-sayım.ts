import { Component } from '@angular/core';
import { IonicPage, NavController, App, AlertController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { UrunDetayPage} from '../urun-detay/urun-detay'

/**
 * Generated class for the StokSayımPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stok-sayım', templateUrl: 'stok-sayım.html',
})
export class StokSayımPage {

  public resposeData: any;
  public resposeData2: any;
  public dataSet: any[] = [];
  public kategori: any[] = [];
  queryText:string;
  secilenKategori:string;
  stokPostData = {
    "kategori": "",
    "search": ""
  };


  constructor(public common: Common, private alertCtrl: AlertController,
    public navCtrl: NavController, public app: App,
    public authService: AuthService) {


  }

  ionViewDidLoad() {
    //this.getFeed();
    this.getkategori();
    this.getstok();
  }

  getkategori() {
    this.common.presentLoading();
    this.authService.postData(this.stokPostData, "kategori")
      .then((result) => {
        this.resposeData = result;
        this.common.closeLoading();
        this.kategori = this.resposeData.feedData;
        console.log(this.kategori);


      }, (err) => {
        //Connection failed message
      });

  }
  getstok() {
   // this.common.presentLoading();
    this.authService.postData(this.stokPostData, "stok_sayim")
      .then((result) => {
        this.resposeData2 = result;
    
        this.dataSet = this.resposeData2.feedData;
        console.log(this.dataSet);


      }, (err) => {
        //Connection failed message
      });

  }
  public search(){
  if(this.queryText.length > 3){
    this.stokPostData.search=this.queryText;
    this.getstok()
  }

  }
  public kat() {
    
    this.stokPostData.kategori = this.secilenKategori;
      this.getstok()
    

  }


  itemTapped(event, urun){
    this.navCtrl.push(UrunDetayPage, { item: urun });

  }





}
