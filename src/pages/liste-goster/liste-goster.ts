import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as papa from 'papaparse';
import { Http } from '@angular/http'
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
    console.log(this.dataSet[1]);
    console.log(this.gelen);
    this.csvData=this.dataSet;
    this.headerRow=this.gelen;
    
  }
  downloadCSV(){
    
  }
  trackByFn(index:any,item:any){
    return index;
  }

}
