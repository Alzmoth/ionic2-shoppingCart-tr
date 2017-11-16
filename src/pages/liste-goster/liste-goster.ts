import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as papa from 'papaparse';
import { Http } from '@angular/http'
import {Headers} from '../../entities/excel'
import { parseDate } from 'ionic-angular/util/datetime-util';

/**
 * Generated class for the ListeGosterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-goster',
  templateUrl: 'liste-goster.html',
})
export class ListeGosterPage {

  gelen: any;
  public dataSet: any[] = [];
  headerRow: any[] = [];
  csvData: any[] = [];
  

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    
   ) {
    this.dataSet=navParams.get('item');
    this.gelen=navParams.get('item2');
    
  }

  ionViewDidLoad() {
    console.log(this.dataSet);
   // console.log(this.gelen);
  
  
  }
  downloadCSV(){
    
    let csv=papa.unparse({
      fields:["Stok Adı","Stok Kodu","Stok Adedi","Barkod"],
       data:["deliveli"]
      
        });
    console.log(csv)

    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    document.getElementById("a");
    a.href = window.URL.createObjectURL(blob);
    a.charset = "iso-8859-9"
    a.download="newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  handleError(err){

  }



  trackByFn(index:any,item:any){
    return index;
  }

}
