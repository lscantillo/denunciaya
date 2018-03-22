import { Component,ViewChild  } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlertaPage } from '../pages/alerta/alerta';
import { HomicidioformPage } from '../pages/homicidioform/homicidioform';
import { HurtoformPage } from '../pages/hurtoform/hurtoform';
import { ViolenciaformPage } from '../pages/violenciaform/violenciaform';
import { MapasPage } from '../pages/mapas/mapas';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //navCtrl: any;
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'Homicidio', component: HomicidioformPage },
      { title: 'Hurto', component: HurtoformPage },
      { title: 'Violencia Intrafamiliar', component: ViolenciaformPage }
    ];
  }

  initializeApp() {
  this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openHome(){
    this.nav.setRoot(HomePage);
  }

  openMapas(){
    this.nav.setRoot(MapasPage);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    let confirm = this.alertCtrl.create({
      title: 'Términos y Condiciones',
      cssClass: 'alertDanger',//prueba CSS
      message: 'Señor usuario, le damos la bienvenida al Sistema Nacional de Denuncia Virtual. Le informamos que para dar trámite a las diferentes solicitudes que pueden realizarse en este Sistema, se requiere del registro de toda la información requerida. A esta información por usted brindada, se le dará el tratamiento de la "Ley 1581 de 2012. Ley de Protección de Datos Personales".',
      buttons: [
        {
          text: 'Disagree',                  
          handler: () => {
            console.log('Disagree clicked');
            //this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Agree',          
          handler: () => {
            console.log('Agree clicked');              
            this.nav.setRoot(page.component);
            
          }
        }
      ]
    });
    confirm.present();
  }

    
}

