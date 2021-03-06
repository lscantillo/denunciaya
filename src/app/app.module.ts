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
import { ClaseshurtoPage } from '../pages/claseshurto/claseshurto';
import { HurtotransportePage } from '../pages/hurtotransporte/hurtotransporte';
import { HurtocomercioPage } from '../pages/hurtocomercio/hurtocomercio';
import { HurtopersonasPage } from '../pages/hurtopersonas/hurtopersonas';
import { HurtoresidenciasPage } from '../pages/hurtoresidencias/hurtoresidencias';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { TelefonosPage } from '../pages/telefonos/telefonos';
import { CallNumber } from '@ionic-native/call-number';
import { GraficosPage } from '../pages/graficos/graficos';
import { GraficasPage } from '../pages/graficas/graficas';
import { InicioPage } from '../pages/inicio/inicio';
import { MasPage } from '../pages/mas/mas';
import { TotalPage } from '../pages/total/total';

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
    MapasPage,
    ClaseshurtoPage,
    HurtocomercioPage,
    HurtopersonasPage,
    HurtoresidenciasPage,
    HurtotransportePage,
    TelefonosPage,
    GraficosPage,
    GraficasPage,
    InicioPage,
    MasPage,
    TotalPage   

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
    MapasPage,
    ClaseshurtoPage,
    HurtocomercioPage,
    HurtopersonasPage,
    HurtoresidenciasPage,
    HurtotransportePage,
    TelefonosPage,
    GraficosPage,
    GraficasPage,
    InicioPage,
    MasPage,
    TotalPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Geolocation,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
