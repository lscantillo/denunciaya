import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertaPage } from '../pages/alerta/alerta';
import { HomicidioformPage } from '../pages/homicidioform/homicidioform';
import { HurtoformPage } from '../pages/hurtoform/hurtoform';
import { ViolenciaformPage } from '../pages/violenciaform/violenciaform';
import { MapasPage } from '../pages/mapas/mapas';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';

export const firebaseConfig = {
  apiKey: "AIzaSyA_jOFmnvR-jwlbeIGD5DNxjzMKQJ4LRoI",
  authDomain: "denunciaya-7a782.firebaseapp.com",
  databaseURL: "https://denunciaya-7a782.firebaseio.com",
  storageBucket: "denunciaya-7a782.appspot.com",
  messagingSenderId: '163606553417'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertaPage,
    HomicidioformPage,
    HurtoformPage,
    ViolenciaformPage,
    MapasPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertaPage,
    HomicidioformPage,
    HurtoformPage,
    ViolenciaformPage,
    MapasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
