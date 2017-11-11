import { Component,ViewChild } from '@angular/core';
import { Platform, App, MenuController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplitPane } from '../providers/split-pane';
import { Welcome } from '../pages/welcome/welcome';
import {HomePage} from '../pages/home/home'
import { StokSayımPage } from '../pages/stok-sayım/stok-sayım'
import {TabsPage} from '../pages/tabs/tabs'
import { SiparisTabsPage } from '../pages/siparis-tabs/siparis-tabs'
import {StokSepetPage} from '../pages/stok-sepet/stok-sepet'
import { StokListePage} from '../pages/stok-liste/stok-liste'


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  appPages: PageInterface[] = [
    { title: 'Stok Sayım', name: 'TabsPage', component: TabsPage, tabComponent: StokSayımPage, index: 0, icon: 'calendar' },
    { title: 'sepet', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 1, icon: 'contacts' },

  ];
  rootPage:any = Welcome;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, public splitPane: SplitPane, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Siparis', component: SiparisTabsPage },
      { title: 'Stok Sayim', component: TabsPage },
      { title: 'Stok sepeti', component: StokSepetPage },
      { title: 'Sayim Listesi', component: StokListePage },

    ];

  }

   backToWelcome(){
   const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    //Api Token Logout 
    
    localStorage.clear();
    this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 1000);
     this.nav.setRoot(Welcome);
    
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  
    this.nav.setRoot(page.component);
    this.menu.close();
    
  }
}
