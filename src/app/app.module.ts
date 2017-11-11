import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StokSayımPage } from '../pages/stok-sayım/stok-sayım'
import { StokSepetPage } from '../pages/stok-sepet/stok-sepet'


import { UrunDetayPage } from '../pages/urun-detay/urun-detay'
import { StokListeDetayPage } from '../pages/stok-liste-detay/stok-liste-detay'
import { StokListeDetayPageModule } from '../pages/stok-liste-detay/stok-liste-detay.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { SiparisTabsPage } from '../pages/siparis-tabs/siparis-tabs'
import { SiparisListePage } from '../pages/siparis-liste/siparis-liste'
import { SiparisSepetPage } from '../pages/siparis-sepet/siparis-sepet'
import { SiparisSepetPageModule } from '../pages/siparis-sepet/siparis-sepet.module'
import { SiparisSatisPage } from '../pages/siparis-satis/siparis-satis'
import { SiparisSatisPageModule } from '../pages/siparis-satis/siparis-satis.module'
import { SiparisListePageModule } from '../pages/siparis-liste/siparis-liste.module'

import { StokSayımPageModule } from '../pages/stok-sayım/stok-sayım.module'
import { StokSepetPageModule } from '../pages/stok-sepet/stok-sepet.module'
import { StokListePageModule } from '../pages/stok-liste/stok-liste.module'


import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { stoksepetprovider } from '../providers/stok-sepet-provider';


@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    HomePage,
    TabsPage,
    SiparisTabsPage,
    UrunDetayPage,
    StokListeDetayPage

  ],
  imports: [
    BrowserModule, HttpModule, MomentModule, LinkyModule,

    SiparisSatisPageModule, SiparisSepetPageModule, SiparisListePageModule,

    StokSayımPageModule, StokSepetPageModule, StokListePageModule, 

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    HomePage,
    TabsPage,
    SiparisTabsPage,
    UrunDetayPage,
    StokListeDetayPage

  ],
  providers: [
    StatusBar,
    SplashScreen, AuthService, SplitPane, Common,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    stoksepetprovider
  ]
})
export class AppModule { }
