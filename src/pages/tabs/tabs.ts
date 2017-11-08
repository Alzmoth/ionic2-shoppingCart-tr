import { Component } from '@angular/core';

import { StokSayımPage } from '../stok-sayım/stok-sayım'
import { StokSepetPage } from '../stok-sepet/stok-sepet'
import { StokListePage } from '../stok-liste/stok-liste'

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = StokSayımPage;
    tab2Root = StokSepetPage;
    tab3Root = StokListePage;

    constructor() {

    }
}
