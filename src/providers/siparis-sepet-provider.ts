import { Injectable } from '@angular/core';
import { StokSayımPage } from '../pages/stok-sayım/stok-sayım';
import { Urun } from '../entities/urunler'
import { SiparisSepetUrun } from '../entities/siparis-sepet-urun'
import { siparis_sepet_urun } from '../entities/siparis_sepet_list'
import { AuthService } from './auth-service'

@Injectable()
export class siparissepetprovider {

    siparissepetUrun: SiparisSepetUrun[];
    public dataSet: any[] = [];
    public dataSet1: any[] = [];
    public userDetails: any;
    postData: Urun;
    gelen: any;
    userPostData = {
        "user_id": "",
        "token": "",
        "stok_kayit_id": "",
        "aciklama": "",
        urun_adedi:0,
        sepet_toplam_fiyat:0
    };
    public toplam_urun=0;
    public sepet_fiyat=0;
    stokPostData = {
        barkod: 0,
        "firma_kodu": "",
        stok_adet: 1,
        "stok_adi": "",
        "stok_kodu": "",
        "fatura_no": ""
    };

    public gelenaciklama: any;

    gelenveri: any;

    constructor(public authService: AuthService) {
        const data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
    }

    addToCart(urun: Urun): void {

        var addedItem = siparis_sepet_urun.find(t => t.urun.stok_kodu == urun.stok_kodu);
        if (addedItem) {
           
            addedItem.urun.stok_adet = (urun.stok_adet * 1);
            console.log("girmemesi gerekiyor" + addedItem.urun.stok_adet)
        }
        else {
            let siparisUrun = new SiparisSepetUrun();
            siparisUrun.urun = urun;
            siparisUrun.urun_toplam_fiyat = (siparisUrun.urun.stok_adet*siparisUrun.urun.satis_fiyat)
            siparis_sepet_urun.push(siparisUrun);
            console.log("ilk kez" + siparisUrun);
        }
    }

    list(): SiparisSepetUrun[] {
        return siparis_sepet_urun;


    }

    clear() {
        siparis_sepet_urun.splice(0, siparis_sepet_urun.length);

    }

    removeFromCart(urun: Urun) {
        var addedItem = siparis_sepet_urun.find(t => t.urun.stok_kodu == urun.stok_kodu);
        var indexNo = siparis_sepet_urun.indexOf(addedItem);
        if (indexNo != -1) {
            siparis_sepet_urun.splice(indexNo, 1);
        }
    }
    stokkayit(gelen) {
        console.log(gelen)


        this.userPostData.aciklama = gelen;
        console.log(this.userPostData);
        this.authService
            .postData(this.userPostData, "stok_kayit_id")//fatura id ve isim kaydediliyor ve fatura no çagırılıyor ve kullanılıyor
            .then((result) => {
                this.gelenveri = result;
                this.dataSet = this.gelenveri.feedData;




                for (var index = 0; index < siparis_sepet_urun.length; index++) {
                    var element = siparis_sepet_urun[index];
                    element.urun.fatura_no = this.gelenveri.feedData.fatura_no;



                    this.authService.postData(element.urun, "stok_kayit").then((result) => {
                        this.gelen = result;
                        this.dataSet = this.gelen.feedData;

                        this.stokPostData.fatura_no = "";

                    });

                }
                siparis_sepet_urun.splice(0, siparis_sepet_urun.length);
                //console.log(stok_sepet_list)

            }, (err) => {
                //Connection failed message
            });



    }
    urunkaydet() {



        // urunler faturaid ye geri veritabanına kaydediliyor


    }

}
