import { Injectable } from '@angular/core';
import { StokSayımPage } from '../pages/stok-sayım/stok-sayım';
import { Urun } from '../entities/sayimurun'
import { SayimSepetUrun } from '../entities/sayim-sepet-urun'
import { stok_sepet_list } from '../entities/stok-sepet-list'

@Injectable()
export class stoksepetprovider {

  sayimsepetUrun: SayimSepetUrun[];
  constructor() {


  }

  addToCart(urun: Urun): void {
    var addedItem = stok_sepet_list.find(t => t.urun.stok_kodu == urun.stok_kodu);
    if (addedItem) {

      addedItem.urun.stok_adet = (urun.stok_adet * 1) + (addedItem.urun.stok_adet * 1);
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

}
