import { Component } from '@angular/core';
import { IonicPage, NavController, App, AlertController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { SiparisUrunDetayPage} from '../siparis-urun-detay/siparis-urun-detay'

/**
 * Generated class for the SiparisSatisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis-satis',
  templateUrl: 'siparis-satis.html',
})
export class SiparisSatisPage {
  public resposeData: any;
  public resposeData2: any;
  public dataSet: any[] = [];
  public kategori: any[] = [];
  queryText: any;
  secilenKategori: string;
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
    this.authService.postData(this.stokPostData, "siparis_satis")
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

    this.authService.postData(this.stokPostData, "siparis_satis")
      .then((result) => {
        this.resposeData2 = result;
        this.dataSet = this.resposeData2.feedData;
        console.log(this.dataSet);



      }, (err) => {
        //Connection failed message
      });

  }
  public search(queryText) {
    if (this.queryText.length >= 3) {
      this.stokPostData.search = this.queryText;
      this.getstok()
    } else {
      this.stokPostData.search = "";
    }

  }
  public kat() {

    this.stokPostData.kategori = this.secilenKategori;
    console.log(this.stokPostData);
    this.getstok()


  }


  itemTapped(event, urun) {
    this.navCtrl.push(SiparisUrunDetayPage, { item: urun });

  }




}
