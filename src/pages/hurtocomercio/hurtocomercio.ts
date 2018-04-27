import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';

/**
 * Generated class for the HurtocomercioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hurtocomercio',
  templateUrl: 'hurtocomercio.html',
})
export class HurtocomercioPage {

  arrDenuncias= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HurtocomercioPage');
  }

  EnviarHurtoComercio(){
    this.fdb.list("/Denuncias/Hurto/Comercio").push(this.arrDenuncias)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
     this.navCtrl.push(HomePage);
    
  }

}
