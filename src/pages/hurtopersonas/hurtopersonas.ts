import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';

/**
 * Generated class for the HurtopersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hurtopersonas',
  templateUrl: 'hurtopersonas.html',
})
export class HurtopersonasPage {

  arrDenuncias= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HurtopersonasPage');
  }

  EnviarHurtoPersonas(){
    this.fdb.list("/Denuncias/Hurto/Personas").push(this.arrDenuncias)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Apellidos").push(this.Apellidos)
    // this.fdb.list<'items'>("/Denuncias/Homicidio/Telefono").push(this.Telefono)
     this.navCtrl.push(HomePage);
    
  }

}
