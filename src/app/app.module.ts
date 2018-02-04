import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { ItemPage } from '../pages/item/item';
//import { HelloWorldApi } from '../shared/hello-world-api.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		ItemsPage,
		ItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
		ItemsPage,
		ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
//		HelloWorldApi
  ]
})
export class AppModule {}
