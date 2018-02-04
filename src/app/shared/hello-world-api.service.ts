import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HelloWorldApi {
	
	private baseUrl = 'https://hello-world-ionic2.firebaseio.com/';
	
	constructor(private http: Http){ }
	
	getItems(){
		return new Promise(resolve => {
			this.http.get(`${this.baseUrl}/items.json`)
				.subscribe(res => resolve(res.json()));
		})
	}
}