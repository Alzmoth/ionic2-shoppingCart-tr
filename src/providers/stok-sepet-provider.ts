import { Injectable } from '@angular/core';
import { StokSayımPage } from '../pages/stok-sayım/stok-sayım';
import { Urun } from '../entities/sayimurun'
import { SayimSepetUrun } from '../entities/sayim-sepet-urun'
import { stok_sepet_list } from '../entities/stok-sepet-list'
import { AuthService} from './auth-service'

@Injectable()
export class stoksepetprovider {

  sayimsepetUrun: SayimSepetUrun[];
  public userDetails: any;
  userPostData = {
    "user_id": "",
    "token": "",
    "stok_kayit_id": "",
  };
  gelenveri:any;

  constructor(public authService: AuthService) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
  }

  addToCart(urun: Urun): void {
    var addedItem = stok_sepet_list.find(t => t.urun.stok_kodu == urun.stok_kodu);
    if (addedItem) {

      addedItem.urun.stok_adet = (urun.stok_adet * 1) ;
      console.log("girmemesi gerekiyor" + addedItem.urun.stok_adet)
    }
    else {
      let sayimUrun = new SayimSepetUrun();
      sayimUrun.urun = urun;
      stok_sepet_list.push(sayimUrun);
      console.log("ilk kez" + sayimUrun);
    }
  }

  list(): SayimSepetUrun[] {
    return stok_sepet_list;


  }

  clear() {
    stok_sepet_list.splice(0, stok_sepet_list.length);

  }

  removeFromCart(urun: Urun) {
    var addedItem = stok_sepet_list.find(t => t.urun.stok_kodu == urun.stok_kodu);
    var indexNo = stok_sepet_list.indexOf(addedItem);
    if (indexNo != -1) {
      stok_sepet_list.splice(indexNo, 1);
    }
  }
  stokkayit(){
    console.log(this.userPostData)
    
    
    this.authService
      .postData(this.userPostData, "stok_kayit_id")//fatura id ve isim
      .then((result) => {
        this.gelenveri = result;
        console.log(this.gelenveri)

      }, (err) => {
        //Connection failed message
      });


  }

}
