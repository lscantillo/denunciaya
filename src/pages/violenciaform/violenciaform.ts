import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav,  Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the ViolenciaformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-violenciaform',
  templateUrl: 'violenciaform.html',
})
export class ViolenciaformPage {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  arrDenuncias= {};
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
  }

  EnviarViolencia(){
    this.fdb.list("/Denuncias/Violencia").push(this.arrDenuncias)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
     this.navCtrl.push(HomePage);
    //this.nav.setRoot(HomePage);
    //this.navCtrl.popTo(HomePage);
  }

}
