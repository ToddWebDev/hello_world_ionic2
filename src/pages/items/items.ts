import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemPage } from '../item/item';
//import { HelloWorldApi } from './shared/hello-world-api.service.ts';

@Component({
  selector: 'items-home',
  templateUrl: 'items.html'
})

export class ItemsPage {
	
	items = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Orange' },
		{ id: 3, name: 'Banana' }
	];;

  constructor(public nav: NavController) {}

	itemTapped($event, item){
		this.nav.push(ItemPage, item);
	}
	
	ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }
	
	ionViewWillEnter() {
    console.log('ionViewWillEnter ItemsPage');
  }
	
	ionViewWillLeave() {
    console.log('ionViewWillLeave ItemsPage');
  }
	
	ionViewDidUnload() {
    console.log('ionViewDidUnload ItemsPage');
  }
	

}