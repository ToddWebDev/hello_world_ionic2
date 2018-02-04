import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})

export class ItemPage {
	
	item: any;

  constructor(public nav: NavController, public NavParams: NavParams) {
		this.item = this.NavParams.data;
		console.log(this.NavParams);
  }
	
	goHome(){
		this.nav.popToRoot();
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
	
	ionViewWillEnter() {
    console.log('ionViewWillEnter ItemPage');
  }
	
	ionViewWillLeave() {
    console.log('ionViewWillLeave ItemPage');
  }
	
	ionViewDidUnload() {
    console.log('ionViewDidUnload ItemPage');
  }
	

}
