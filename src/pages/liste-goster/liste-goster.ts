import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as papa from 'papaparse';
import { Http } from '@angular/http'
import { Headers } from '../../entities/excel'
import { parseDate } from 'ionic-angular/util/datetime-util';
import { Console } from '@angular/core/src/console';
import { textDef } from '@angular/core/src/view/text';
import { Text } from '@angular/compiler';
import { MomentModule } from 'angular2-moment';

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


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
 
  saveData: any[] = [];
  public splitPaneState: boolean;


  constructor(public navCtrl: NavController,
    public navParams: NavParams, private http: Http,
    public platform: Platform,
    public menu: MenuController


  ) {
    this.splitPaneState = false;

    this.dataSet = navParams.get('item');
    this.gelen = navParams.get('item2');
    console.log("hello", this.gelen)
    this.menu.enable(false);
    setTimeout(() => this.navCtrl.pop(), 7000);
    setTimeout(() => this.menu.enable(true), 7000)


    this.dataSet.forEach(element => {
      delete element.stok_id;
      delete element.fatura_no;
    });
    console.log("ilk hali", this.dataSet)
    // this.extractData();
  }



 

  ionViewDidLoad() {


  }


}